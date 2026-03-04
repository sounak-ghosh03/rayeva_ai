import Product from "../models/product.model.js";
import { generateCategoryData } from "../services/ai.category.js";
import { logAIInteraction } from "../utils/logger.js";

export const autoCategorize = async (req, res) => {
   try {
      const { productName, description } = req.body;

      if (!productName || !description) {
         return res.status(400).json({ error: "Missing fields" });
      }

      const { prompt, result } = await generateCategoryData({
         productName,
         description,
      });

      logAIInteraction("Module1", prompt, result);

      const savedProduct = await Product.create({
         productName,
         description,
         ...result,
      });

      res.status(201).json(savedProduct);
   } catch (error) {
      res.status(500).json({ error: "AI processing failed" });
   }
};
