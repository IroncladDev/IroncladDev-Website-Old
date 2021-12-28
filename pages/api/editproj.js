// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { Site } from '../../scripts/mongo.js'
import { limiter } from '../../scripts/util.js'
import nextConnect from "next-connect";
const app = nextConnect();
import cloudinary from 'cloudinary';


app.use(limiter(60 * 1000, 3));
app.post(async (req, res) => {
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
})

export default app;


