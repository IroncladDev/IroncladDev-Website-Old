// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import nextConnect from "next-connect";
import { Site } from '../../scripts/mongo.js'
import { app, limiter } from '../../scripts/util.js'
import cloudinary from 'cloudinary';


app.use(limiter(60 * 1000, 3));
app.post(async (req, res) => {
  if (req.method === "POST") {
    let body = req.body;
    if (body.auth === process.env.ADMSS) {
      let site = await Site.findOne({ _id: body.slug });
      if(body.title === "[DELETE]"){
        await site.remove();
      }else{
        site.title = body.title||site.title;
        site.desc = body.desc||site.desc;
        site.posval = body.posval||site.posval;
        await site.save();
      }
      let newData = await Site.find({}).sort("-posval")
      await res.status(200).json({ success: true, message: "Success", data: newData })
    } else {
      res.status(401).json({ success: false, message: "Unauthorized" });
    }
  } else {
    res.status(403).json({ success: false, message: "Cannot GET /api/add-site" });
  }
})

export default app;


