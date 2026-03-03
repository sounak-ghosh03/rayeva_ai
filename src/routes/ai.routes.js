import express from "express";
import { autoCategorize } from "../controllers/category.controller.js";
import { createProposal } from "../controllers/proposal.controller.js";

const routes = express.Router();

router.post("/auto-category", autoCategorize);
router.post("/generate-proposal", createProposal);

export default routes;
