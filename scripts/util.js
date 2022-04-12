import rateLimit from 'express-rate-limit'
import nextConnect from "next-connect";
import requestIp from 'request-ip'
import nodemailer from 'nodemailer';
import inLineCss from 'nodemailer-juice';

export const limiter = (time, max, handler) => {
  return rateLimit({
    windowMs: time,
    max: max,
    handler: handler || function (req, res, /*next*/) {
      return res.status(429).json({
        success: false,
        message: 'Too many attempts.  Please try again later.'
      })
    },
    keyGenerator: function (req, res) {
      return requestIp.getClientIp(req);
    }
  })
};

export const app = nextConnect();
export async function sendEmail(to, subject, body) {
  return await fetch("https://email.connerow.dev/send", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "accept": "*/*"
    },
    body: JSON.stringify({
      email: process.env.EMAIL,
      password: process.env.GP,
      auth: process.env.EMAIL_TOKEN,
      to,
      subject,
      body
    })
  }).then(r => r.json());
}