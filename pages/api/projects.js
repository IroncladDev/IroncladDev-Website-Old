import { Site } from '../../scripts/mongo.js';
import nextConnect from "next-connect";
const app = nextConnect();

app.get(async (req, res) => {
  let data = await Site.find({}).sort('-posval');
  if(data){
    res.status(200).json(data);
  }else{
    res.status(404).json([])
  }
})

export default app