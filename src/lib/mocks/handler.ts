import { rest } from "msw";

export const handlers = [
  rest.get("https://api.chagok.site/hackathons", async (req, res, ctx) => {
    // const { size, page, sort, direction } = req.params;

    const contests = await import("./data/contests.json");
    return res(ctx.json(contests));
  }),
];
