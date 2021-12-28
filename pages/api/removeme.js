import { Sub } from '../../scripts/mongo.js'
import { app, sendEmail } from '../../scripts/util.js'
import requestIp from 'request-ip'


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


