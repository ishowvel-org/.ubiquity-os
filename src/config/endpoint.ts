import { Static, Type } from "@sinclair/typebox";
import { commentType } from "./formatting-evaluator-config";

const openAiType = Type.Object(
  {
    /**
     * AI model to use for comment evaluation.
     */
    model: Type.String({ default: "gpt-4o-2024-08-06" }),
    /**
     * Specific endpoint to send the comments to.
     */
    endpoint: Type.String({ default: ""}),
  },
  { default: {} }
);

export const contentEvaluatorConfigurationType = Type.Object({
  openAi: openAiType,
  /**
   * Multipliers applied to different types of comments
   */


export type ContentEvaluatorConfiguration = Static<typeof contentEvaluatorConfigurationType>;
