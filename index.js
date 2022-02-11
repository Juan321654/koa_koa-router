const Koa = require("koa");
const bodyParser = require("koa-bodyparser");
const Router = require("koa-router");
const app = new Koa();

app.use(bodyParser());

const router = new Router();

let stores = {
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

router.get("/stores", async (ctx) => {
  ctx.body = stores;
});

router.post("/stores", async (ctx) => {
  const store = ctx.request.body;
  stores.stores.push(store);
  ctx.response.status = 201;
  ctx.body = store;
});

// response
app.use(router.routes()).use(router.allowedMethods());

app.listen(3000, () => {
  console.log("server is running on port 3000");
});
