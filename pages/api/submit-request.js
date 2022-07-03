// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { Wait } from '../../scripts/mongo.js'
import { sendEmail } from '../../scripts/util.js'
import superagent from 'superagent'
import requestIp from 'request-ip'
import { serialize } from 'cookie';
import nextConnect from "next-connect";
const app = nextConnect();

app.post(async (req, res) => {
    /*if (await Wait.findOne({ addr: requestIp.getClientIp(req) })) {
      res.status(403).json({ success: false, message: "I appreciate it, but you are already on the waitlist.  Please try again later." })
    } else {
      if (await superagent.get("https://hcaptcha.com/siteverify?response=" + req.body['h-captcha-response'] + "&secret=" + process.env.HC_SECRET)) {
        let body = req.body;
        try {
          let wait = new Wait({
            user: body.user,
            approxDays: body.approxDays,
            email: body.email,
            addr: requestIp.getClientIp(req)
          });
          await wait.save();
          console.log(await sendEmail(wait.email, "Thank you for hiring me!", `Dear ${wait.user}, thank you for assigning me the task of building your website.<br><br>

      If there is any necessary information I'll need me to provide, I'll get in touch with you.<br><br>

      I will try my best to get to building your site as soon as possible.<br><br>

      The estimated cost for your website is ${body.cost} and <strong>might change</strong> in the end.<br><br>

      When I'm ready to start building your website, I'll send you an email containing the link to a payment form.<br>
      You will pay 25% of the estimated cost of your website before I start building it.  As for minors and clients under eighteen, the price should be paid in full before any development starts.<br>
      After you complete the payment, I will start building your site.

      Thanks,
      - Conner
      `))

          let pageKeys = JSON.parse(body.pages)
          let arr = [];
          for (var i = 0; i < pageKeys.length; i++) {
            arr.push("<strong>" + pageKeys[i].title + "</strong> - \n" + pageKeys[i].desc);
          }

          console.log(await sendEmail("connerow1115@gmail.com", "[WEBSITE REQUEST]", `${wait.user} requested a website from you.<br><br>
      Additional Info: ${body.info}<br><br>
      Features:<br>${JSON.parse(body.reqs).map(r => " - " + r).join('<br>')}<br><br>
      Estimated Cost: ${body.cost}<br><br>
      Website Type: ${body.type}<br><br>
      User Email: ${body.email}<br><br>
      <h2>Pages</h2>
      ${arr.join("<hr/>")}`))
          res.status(200)
          .setHeader('Set-Cookie', serialize('uid', JSON.stringify([wait._id, wait.user]), { path: '/', maxAge: 1000 * 3600 * 24 * 365 }))
          .json({ success: true, data: wait, message: "Congrats!  You registered successfully!  You will be redirected shortly." });
        } catch (err) {
          console.log(err)
          res.status(500).json({ success: false, message: "Whoops, there was an Internal Server Error.  Please try again or contact me if the problem persists." })
        }
      } else {
        res.status(403).json({ success: false, message: "Invalid Captcha.  Please make sure you check it before you continue." })
      }
    }*/
    res.json({ success: false })
})

export default app;


