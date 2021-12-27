import { Sub } from '../../scripts/mongo.js'
import { app } from '../../scripts/util.js'
import requestIp from 'request-ip'


app.post(async (req, res) => {
  let email = req.body.email;
  if (/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email)) {
    let ipsub = await Sub.findOne({ addr: requestIp.getClientIp(req) });
    if (ipsub) {
      res.json({ success: false, message: "I appreciate it, but you can't subscribe to me more than once.", icon: "warning" })
    } else {
      let findSub = await Sub.findOne({ email: email });
      if (findSub) {
        res.json({ success: false, message: "I appreciate it, but you can't subscribe to me more than once.", icon: "warning" })
      } else {
        let sub = new Sub({
          email: email
        })
        await sub.save();
        await res.json({ success: true, data: sub });
      }
    }
  } else {
    res.status(400).json({ success: false, message: "Invalid email address.  Please enter a real email." });
  }
})

export default app;


