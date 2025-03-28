import Koa from 'koa';
import { Context } from '@interface/IKoa';
import { Logger } from 'log4js';

class ErrorHandler {
    static error(app: Koa, logger: Logger) {
        app.use(async(ctx: Context, next: ()=> Promise<unknown>) =>{
            try {
                await next()
            } catch (e) {
                logger.error(e);
                ctx.body = '500requests~recovering';
            }
        });

        app.use(async(ctx: Context, next: ()=>Promise<unknown>) => {
            await next();
            if (ctx.status !== 404) {
                return;
            }
            ctx.body = '<script type="text/javascript" src="//qzonestyle.gtimg.cn/qzone/hybird/app/404/search_children.js" charset="utf-8"></s>'
        });
    }
}
export default ErrorHandler;