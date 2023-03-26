import { rest } from "msw";

export const handlers = [
  rest.get("/login", async (req, res, ctx) => {
    return res(
      ctx.json({
        id: "fqwewg24-h242h278yy-yr7tgs4se-se5gs5gsegse",
        firstName: "Russ",
        lastName: "Youn",
      })
    );
  }),
  rest.get("https://raw.githubusercontent.com/techoi/raw-data-api/main/simple-api.json", async (req, res, ctx) => {
    return res(
      ctx.json({
        data: {
          people: [
            {
              name: "Russ",
              age: 135,
            },
            {
              name: "timmy",
              age: 13,
            },
            {
              name: "cindy",
              age: 15,
            },
            {
              name: "judy",
              age: 25,
            },
            {
              name: "marry",
              age: 64,
            },
            {
              name: "tommy",
              age: 109,
            },
          ],
        },
      })
    );
  }),
];
