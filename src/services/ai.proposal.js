export const generateProposal = async (data) => {
   const prompt = `
You are a sustainability procurement AI.

Input:
Business Type: ${data.businessType}
Budget: ${data.budget}
Priority: ${data.priority}

Ensure totalBudgetUsed does NOT exceed budget.

Return format:
{
  "recommendedProducts": [],
  "totalBudgetUsed": 0,
  "estimatedImpact": {
    "plasticReducedKg": 0,
    "carbonSavedKg": 0
  },
  "impactSummary": ""
}
  Return ONLY strictly valid JSON output with no explanation.
`;

   const response = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [{ role: "user", content: prompt }],
      temperature: 0.3,
   });

   return {
      prompt,
      result: JSON.parse(response.choices[0].message.content),
   };
};
