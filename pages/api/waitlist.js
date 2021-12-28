import { Wait } from '../../scripts/mongo.js';
import nextConnect from "next-connect";
const app = nextConnect();

app.get(async (req, res) => {
  let data = await Wait.find({}).select("-addr").select("-user").select("-email").sort('date');
  if(data){
    let dt = [...data];
    res.status(200).json(data);
  }else{
    res.status(404).json({})
  }
})

export default app