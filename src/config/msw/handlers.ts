import { rest } from "msw";
import { mockData } from "./mockData";

export const handlers = [
  rest.post("/image-info", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(mockData.picturesData));
  }),
];


