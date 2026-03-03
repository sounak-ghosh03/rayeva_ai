import mongoose from "mongoose";

const proposalSchema = new mongoose.Schema({
   businessType: String,
   budget: Number,
   priority: String,
   recommendedProducts: Array,
   totalBudgetUsed: Number,
   estimatedImpact: Object,
   impactSummary: String,
});

export default mongoose.model("Proposal", proposalSchema);
