import dotenv from 'dotenv'
import mongoose from 'mongoose'
dotenv.config();


const siteSchema = new mongoose.Schema({
  title: { type: String, index: true },
  desc: { type: String, index: true },
  link: { type: String, index: true },
  created: { type: String, index: true, default: (new Date).getTime() },
  cover: { type: String, index: true }
},
  {
    timestamps: true
  })
const waitSchema = new mongoose.Schema({
  user: { type: String, index: true },
  approxDays: { type: Number, index: true },
  email: { type: String, index: true },
  date: { type: String, index: true, default: (new Date()).toISOString().split('T')[0] },
  addr: { type: String, index: true },
  status: { type: Boolean, index: true, default: false }
},
  {
    timestamps: true
  })

//process.env.MONGO_URI
mongoose.connect("mongodb://127.0.0.1:27017/web", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

export const Site = mongoose.models.Site || mongoose.model("Site", siteSchema);
export const Wait = mongoose.models.Wait || mongoose.model("Wait", waitSchema);