import openai from "../config/openai.js";

export const generateCategoryData = async (productData) => {
   const prompt = `
You are an AI classifier for a sustainable ecommerce company.

Primary categories:
["Packaging", "Personal Care", "Office Supplies", "Food & Beverage", "Home & Living"]

Sustainability filters allowed:
["plastic-free", "compostable", "biodegradable", "recycled", "vegan", "organic"]

Input:
Product Name: ${productData.productName}
Description: ${productData.description}

Return format:
{
  "primaryCategory": "",
  "subCategory": "",
  "seoTags": [],
  "sustainabilityFilters": []
}
  Return ONLY strictly valid JSON output with no explanation.
`;

   const response = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [{ role: "user", content: prompt }],
      temperature: 0.2,
   });

   return {
      prompt,
      result: JSON.parse(response.choices[0].message.content),
   };
};
