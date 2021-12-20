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
export async function sendEmail(to, subject, message) {
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL,
      pass: process.env.GP
    }
  });
  transporter.use('compile', inLineCss());

  let mailDetails = {
    from: process.env.EMAIL,
    to: to,
    subject: subject,
    html: message,
  };

  transporter.sendMail(mailDetails, function (err, data) {
    if (err) console.error(err)
  });
}