import Koa from 'koa';
import { Context } from '@interface/IKoa';
import { Logger } from 'log4js';

class ErrorHandler {
    static error(app: Koa, logger: Logger) {
        app.use(async(ctx: Context, next: ()=> Promise<unknown>) =>{
            try {
                await next()
            } catch (e) {
                logger.error('Server Error:', e);
                
                // 设置状态码为500
                ctx.status = 500;
                // 提供更结构化的错误响应
                ctx.body = {
                    success: false,
                    message: '服务器内部错误',
                    error: process.env.NODE_ENV === 'production' 
                        ? '服务器处理请求时发生错误'
                        : e.message || '未知错误'
                };
            }
        });

        app.use(async(ctx: Context, next: ()=>Promise<unknown>) => {
            await next();
            if (ctx.status !== 404) {
                return;
            }
            ctx.body = '<script type="text/javascript" src="//qzonestyle.gtimg.cn/qzone/hybrid/app/404/search_children.js" charset="utf-8"></script>';
        });
    }
}
export default ErrorHandler;