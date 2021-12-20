// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import nextConnect from "next-connect";
import { Site } from '../../scripts/mongo.js'
import { app, limiter } from '../../scripts/util.js'

app.use(limiter(60 * 1000, 3));
app.post(async (req, res) => {
  if (req.method === "POST") {
    let body = req.body;
    if (body.password === process.env.PASS) {
      try {
        let site = new Site({
          title: body.title,
          desc: body.desc,
          link: body.link,
          cover: body.cover
        });
        await site.save()
        await res.status(200).json({ success: true, data: site });
      } catch (err) {
        res.status(500).json({ success: false, message: "Internal Server Error" })
      }
    } else {
      res.status(401).json({ success: false, message: "Unauthorized" });
    }
  } else {
    res.status(403).json({ success: false, message: "Cannot GET /api/add-site" });
  }
})

export default app;


