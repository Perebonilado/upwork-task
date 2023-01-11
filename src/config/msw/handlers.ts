import { rest } from "msw";
import { mockData } from "./mockData";

export const handlers = [
  rest.post("/image-info", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(mockData.picturesData));
  }),
];

export type CandleData = [
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  number,
  number,
  string,
  string,
  number,
  number
];

export type PoloniexPricingResponse = CandleData[]
