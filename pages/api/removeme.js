import { Sub } from '../../scripts/mongo.js'
import { sendEmail } from '../../scripts/util.js'
import requestIp from 'request-ip'
import nextConnect from "next-connect";
const app = nextConnect();


app.get(async (req, res) => {
  let sub = await Sub.findOne({ email: req.query.email, addr: requestIp.getClientIp(req) });
  console.log(requestIp.getClientIp(req))
  if (sub) {
    await sendEmail(sub.email, "Unsubscription Successful", "Goodbye!  You were unsubscribed successfully.")
    await sub.remove();
    await res.redirect('/');
  }else{
    res.redirect("/")
  }
})

export default app;


