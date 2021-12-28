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
export function sendEmail(to, subject, message) {
  fetch("https://payment.connerow.dev/api/email", {
    method: "POST",
    body: JSON.stringify({
      to,
      subject,
      body: message,
      auth: process.env.ADMSS
    }),
    headers: {
      "Content-Type": "application/json",
      accept: "*/*"
    }
  }).then(r => r.json()).then(data => {
    console.log(data);
  })
}