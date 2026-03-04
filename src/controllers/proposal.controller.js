import Proposal from "../models/proposal.model.js";
import { generateProposal } from "../services/ai.proposal.js";
import { logAIInteraction } from "../utils/logger.js";

export const createProposal = async (req, res) => {
   try {
      const { businessType, budget, priority } = req.body;

      if (budget < 10000) {
         return res.status(400).json({
            error: "Minimum budget is 10,000",
         });
      }

      const { prompt, result } = await generateProposal({
         businessType,
         budget,
         priority,
      });

      logAIInteraction("Module2", prompt, result);

      const saved = await Proposal.create({
         businessType,
         budget,
         priority,
         ...result,
      });

      res.status(201).json(saved);
   } catch (error) {
      res.status(500).json({ error: "Proposal generation failed" });
   }
};
