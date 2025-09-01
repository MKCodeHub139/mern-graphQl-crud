import mongoose from "mongoose";

async function mongoDbConnect(url){
       await mongoose.connect(url)
}

export default mongoDbConnect