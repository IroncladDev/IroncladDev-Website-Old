import dotenv from 'dotenv'
import mongoose from 'mongoose'
dotenv.config();


const siteSchema = new mongoose.Schema({
  title: { type: String, index: true },
  desc: { type: String, index: true },
  link: { type: String, index: true },
  created: { type: String, index: true, default: (new Date).getTime() },
  cover: { type: String, index: true },
  posval: { type: Number, index: true, default: 0 }
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

const subSchema = new mongoose.Schema({
  email: { type: String, index: true },
  addr: { type: String, index: true }
})


//process.env.MONGO_URI
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

export const Site = mongoose.models.Site || mongoose.model("Site", siteSchema);
export const Wait = mongoose.models.Wait || mongoose.model("Wait", waitSchema);
export const Sub = mongoose.models.Sub || mongoose.model("Sub", subSchema);