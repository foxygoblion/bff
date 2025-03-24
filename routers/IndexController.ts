import {GET, route} from 'awilix-koa';
import { Context } from '@interface/IKoa';

@route('/')
class IndexController {
    @GET();
    async actionList(ctx: Context):Promise<void> {
        const data = await ctx.render('index', {
            data: 'server data!!'
        })
        console.log("aaaaaaaaaaaa", data);
        ctx.body = data;
    }
}
export default IndexController;