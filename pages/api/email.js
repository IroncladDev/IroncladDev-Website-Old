import { Sub } from '../../scripts/mongo.js'
import { sendEmail } from '../../scripts/util.js'
import { template } from '../../scripts/emailtemp.js'
import nextConnect from "next-connect";
const app = nextConnect();


app.post((req, res) => {
  if (req.body.auth === process.env.ADMSS) {
    try {
      Sub.find({}, (err, subs) => {
        if (err) {
          res.status(500).json({ success: false, error: err })
        } else {
          for (var i = 0; i < subs.length; i++) {
            sendEmail(subs[i].email, req.body.title, template(req.body.title, req.body.body.replace(/\n/g, "<br>") + "<br><br>If these emails aren't worth your time, simply click <a href='" + "https://" + req.headers.host + "/api/removeme?email=" + subs[i].email + "'>this link</a> to unsubscribe"))
          }
          res.status(200).json({ success: true, data: subs });
        }
      })
    } catch (err) {
      res.status(500).json({ success: false, error: err })
    }
  } else {
    res.status(401).json({ success: false, message: "Unauthorized" });
  }
})

export default app;


