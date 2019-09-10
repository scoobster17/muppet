import { Context } from 'koa';
import * as Router from 'koa-router';


export const get = new Router()
  .get('/places', async (ctx: Context) => {
    // ctx.request.body;

    // if (!x) {
    //   ctx.throw(400, 'field x is required');
    // }
    // if (!authorized) {
    //   ctx.throw(401);
    // }

    ctx.body = [];
    ctx.status = 200;
  });
