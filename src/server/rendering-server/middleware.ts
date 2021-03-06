import { Context } from 'koa';
import * as config from 'config';


/**
 * Middleware used to render the Front End App using EJS
 * @param template
 * @param isProduction
 */
export function ejs(template: 'index', isProduction: boolean) {
  return async (ctx: Context, next: Function) => {

    // we are using react hash router so the only pages that should ever
    // be served are index (/) and oauth which is handled already
    if (ctx.path !== '/') {
      return next();
    }

    // all requests should be GET requests to view the app
    if (ctx.method !== 'GET') {
      ctx.throw(405);
    }

    const googleMapsApiKey = config.get<string>('google.maps.apiKey');

    // render the app using EJS and the specified template, passing variables to the template
    await ctx.render(
      template,
      {
        isProduction,
        googleMapsApiKey,
      },
    );
  };

}
