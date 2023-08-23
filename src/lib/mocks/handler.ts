import { rest } from "msw";

import contests from "./data/contests.json";

export const handlers = [
  rest.get("https://api.chagok.site/hackathons", (req, res, ctx) => {
    // const { size, page, sort, direction } = req.params;

    return res(ctx.json(contests));
  }),
];
