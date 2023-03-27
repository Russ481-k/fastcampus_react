import { rest } from "msw";

export const handlers = [
  rest.put("http://localhost:3001/counter/increment", async (req, res, ctx) => {
    const {value} = req.body;
    return res(
      ctx.json({
        value:value+2
      })
    );
  }),
  rest.get("/login", async (req, res, ctx) => {
    return res(
      ctx.json({
        id: "fqwewg24-h242h278yy-yr7tgs4se-se5gs5gsegse",
        firstName: "Russ",
        lastName: "Youn",
      })
    );
  }),

  rest.get("https://raw.githubusercontent.com/techoi/raw-data-api/main/simple-api.json?id=react", async (req, res, ctx) => {
  const id = req.url.searchParams.get("id");  
  const originalResponse = await ctx.fetch(req);
  const originalResponseData = await originalResponse.json();

  return res(
    ctx.status(403),
    ctx.json({
        errorMessage: 'Data not found',
    })
    //   ctx.json({
    //     data: {
    //       people: [
    //         ...originalResponseData.data.people,
    //         {
    //           name: id,
    //           age: 135,
    //         },

    //       ],
    //     },
    //   })
    );
  }),
];
