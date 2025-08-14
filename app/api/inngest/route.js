import { inngest } from "@/lib/inngest/client";
import { generateIndustryInsights } from "@/lib/inngest/functions";
import { serve } from "inngest/next";

// Create an API that serves zero functions
export const { GET, POST, PUT } = serve({
  client: inngest,
  signingKey: process.env.INNGEST_SIGNING_KEY,
  functions: [
    /* your functions will be passed here later! */
    generateIndustryInsights,
  ],
});
