import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
   productName: String,
   description: String,
   primaryCategory: String,
   subCategory: String,
   seoTags: [String],
   sustainabilityFilters: [String],
});

export default mongoose.model("Product", productSchema);
