import { BASE_URL } from "lib/apis/axiosClient";
import { rest } from "msw";

import contests from "./data/contests.json";
import project from "./data/projectDetail.json";

export const handlers = [
  rest.get("https://api.chagok.site/hackathons", (req, res, ctx) => {
    // const { size, page, sort, direction } = req.params;

    return res(ctx.json(contests));
  }),
  rest.get(`${BASE_URL}/projects/*`, (req, res, ctx) => {
    return res(ctx.json(project));
  }),
];
