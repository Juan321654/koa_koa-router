const Koa = require("koa");
const app = new Koa();
const Router = require("koa-router");

const router = new Router();

router.get("/stores", async (ctx) => {
  ctx.body = {
    stores: [
      {
        id: 1,
        name: "store1",
        address: "address1",
      },
      {
        id: 2,
        name: "store2",
        address: "address2",
      },
    ],
  };
});

// response
app.use(router.routes()).use(router.allowedMethods());

app.listen(3000);
