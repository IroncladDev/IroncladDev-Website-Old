import { Site } from '../../scripts/mongo.js'
import { app } from '../../scripts/util.js'




app.post(async (req, res) => {
  if (req.method === "POST") {
    let body = req.body
    if (req.body.auth === process.env.ADMSS) {
      try {
        let obj = {
          title: body.title,
          desc: body.desc,
          link: body.link,
          cover: body.cover,
          posval: body.pos || 0
        };
        let site = new Site(obj);
        await site.save();
        let newData = await Site.find({}).sort("-posval")
        await res.status(200).json({ success: true, data: newData });
      } catch (err) {
        console.log(err)
        res.status(500).json({ success: false, message: "Internal Server Error", data: [] })
      }
    } else {
      res.status(401).json({ success: false, message: "Unauthorized" });
    }
  } else {
    res.status(403).json({ success: false, message: "Cannot GET /api/add-site" });
  }
})

export default app;


