import nextConnect from "next-connect";
const app = nextConnect();
import { Site, Wait } from '../../scripts/mongo.js'

app.post(async (req, res) => {
  if (req.body.auth === process.env.ADMSS) {
    let doc = await Wait.findOne({ _id: req.body.slug })
    try {
      if (req.body.type === "progress") {
        doc.status = true;
        await doc.save();
      } else if (req.body.type === "delete") {
        await doc.remove();
      } else {
        doc.status = false;
        await doc.save();
      }
      let newData = await Wait.find({}).sort("date");
      await res.status(200).json({ success: true, data: newData })
    } catch (err) {
      res.status(200).json({ success: false, message: err });
    }
  } else {
    res.statusCode(401).json({ success: false, message: "Unauthorized Request" })
  }
})

export default app