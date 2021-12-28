import { app, limiter } from '../../scripts/util.js';
import { serialize } from 'cookie';

app.use(limiter(1000 * 60 * 60, 3, (req, res) => {
  res.status(429).json({ success: false, message: "Too many failed login attempts." })
}))
app.post((req, res) => {
  let user = req.body.raw.user;
  let psw = req.body.password;
  if (psw === process.env.ADMPSW) {
    if (user.login === process.env.ghName && user.id == process.env.ghId && user.email === process.env.ghEm) {
      res.status(200)
        .setHeader('Set-Cookie', serialize('admin', process.env.ADMSS, { path: '/', expires: new Date(Date.now() + (1000 * 60 * 30)), }))
        .json({ success: true })
    } else {
      res.status(401).json({ success: false, message: "Unauthorized Login" });
    }
  } else {
    res.status(401).json({ success: false, message: "Incorrect Password" })
  }
})

export default app