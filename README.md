# Rayeva AI Systems – Sustainable Commerce Backend

AI-powered backend modules designed to reduce manual catalog effort, automate B2B proposal generation, and enable structured sustainability intelligence for commerce systems.
 
**Tech Stack used:** Node.js, Express, MongoDB, OpenAI API  

---

#  Implemented Modules

## Module 1 – AI Auto-Category & Tag Generator

Automatically:

- Assigns primary category from predefined list  
- Suggests sub-category  
- Generates 5–10 SEO tags  
- Suggests sustainability filters  
- Returns structured JSON  
- Stores output in database  

###  Example Input

```json
{
  "productName": "Bamboo Toothbrush",
  "description": "Eco friendly biodegradable toothbrush made from bamboo"
}
```

###  Example Output

```json
{
  "primaryCategory": "Personal Care",
  "subCategory": "Oral Hygiene",
  "seoTags": [
    "bamboo toothbrush",
    "eco friendly dental care",
    "plastic free toothbrush"
  ],
  "sustainabilityFilters": [
    "plastic-free",
    "biodegradable",
    "vegan"
  ]
}
```

---

##  Module 2 – AI B2B Proposal Generator

Generates:

- Suggested sustainable product mix  
- Budget allocation (within limit)  
- Cost breakdown  
- Estimated sustainability impact  
- Impact positioning summary  
- Structured JSON output  
- Stores proposal in database  

###  Example Input

```json
{
  "businessType": "Corporate Office",
  "budget": 50000,
  "priority": "Plastic reduction"
}
```

###  Example Output

```json
{
  "recommendedProducts": [
    {
      "productName": "Recycled Paper Notebooks",
      "allocatedBudget": 15000
    }
  ],
  "totalBudgetUsed": 48000,
  "estimatedImpact": {
    "plasticReducedKg": 25,
    "carbonSavedKg": 120
  },
  "impactSummary": "This proposal reduces plastic dependency and lowers procurement carbon footprint."
}
```

---

#  Architecture Overview

The system follows **clean architecture principles** with strict separation of concerns:

```
Client Request
      ↓
Route Layer
      ↓
Controller Layer
      ↓
Business Logic Validation
      ↓
AI Service Layer
      ↓
Structured JSON Response
      ↓
Database Storage
      ↓
Prompt + Response Logging
```

---

#  Folder Structure

```
src/
├── config/
│   ├── db.js
│   └── openai.js
│
├── controllers/
│   ├── category.controller.js
│   └── proposal.controller.js
│
├── services/
│   └── ai.service.js
│
├── models/
│   ├── product.model.js
│   └── proposal.model.js
│
├── routes/
│   └── ai.routes.js
│
├── utils/
│   └── logger.js
│
└── app.js
```

---

#  Environment Configuration

Create a `.env` file:

```
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/rayeva-ai
OPENAI_API_KEY=your_openai_key_here
```

---

#  AI Design Strategy

##  Structured JSON Enforcement

Prompts are designed to:

- Return ONLY valid JSON  
- Avoid explanations  
- Follow strict output schema  
- Use low temperature (0.2–0.3) for deterministic output  

---

##  Business Logics

AI can be never trusted blindly.

Examples:

- Minimum budget validation before proposal generation  
- Controlled category list  
- Allowed sustainability filters  
- Budget constraint enforcement  

---

##  Prompt & Response Logging

All AI interactions are logged:

```json
{
  "module": "Module1",
  "timestamp": "...",
  "prompt": "...",
  "response": "..."
}
```

This ensures:

- Transparency  
- Debugging support  
- Audit trail  

---

#  Sustainability Logic (Practical Impact Modeling)

Estimated impact values are grounded using:

```
plasticReducedKg = product_quantity × estimated_plastic_offset
carbonSavedKg = product_quantity × carbon_offset_factor
```


---

#  Architecture for Remaining Modules

##  Module 3 – AI Impact Reporting Generator (Planned)

Architecture:

```
Order Data
   ↓
Impact Calculation Engine
   ↓
AI Summary Generator
   ↓
Stored in Order Document
```

Features:

- Plastic saved estimation  
- Carbon avoided calculation  
- Local sourcing impact summary  
- Human-readable impact statement  

---

##  Module 4 – AI WhatsApp Support Bot (Planned)

Architecture:

```
WhatsApp Webhook (Twilio)
   ↓
Intent Detection
   ↓
Database Lookup
   ↓
AI Response
   ↓
Escalation (if required)
   ↓
Conversation Logging
```

Features:

- Order status queries  
- Return policy handling  
- Escalation for refund cases  
- AI conversation logs  

---



#  Why This System Matters

This backend demonstrates how AI can:

- Reduce manual catalog classification effort  
- Automate sustainable procurement proposals  
- Quantify environmental impact  
- Enable structured AI in real business systems  

It combines:

- AI intelligence  
- Business validation  
- Sustainability modeling  
- Production-grade backend architecture  

---