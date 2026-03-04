import fs from "fs";

export const logAIInteraction = (module, prompt, response) => {
   const log = {
      module,
      timestamp: new Date(),
      prompt,
      response,
   };

   fs.appendFileSync("ai-logs.json", JSON.stringify(log) + "\n");
};
