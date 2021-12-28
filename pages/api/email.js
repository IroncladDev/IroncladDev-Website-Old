import { Sub } from '../../scripts/mongo.js'
import { app, sendEmail } from '../../scripts/util.js'



app.post(async (req, res) => {
  if (req.method === "POST") {
    if (req.body.auth === process.env.ADMSS) {
      try {
        let subs = await Sub.find({})
        for(var i = 0; i < subs.length; i++){
          sendEmail(subs[i].email, req.body.title, req.body.body.replace(/\n/g, "<br>") + "<br><br>If these emails aren't worth your time, simply click <a href='"+"https://"+req.headers.host+"/api/removeme?email="+subs[i].email+"'>this link</a> to unsubscribe")
        }
        await res.status(200).json({ success: true, data: subs });
      } catch (err) {
        console.log(err);
        res.status(500).json({ success: false, error: err })
      }
    } else {
      res.status(401).json({ success: false, message: "Unauthorized" });
    }
  } else {
    res.status(403).json({ success: false, message: "Cannot GET /api/add-site" });
  }
})

export default app;


