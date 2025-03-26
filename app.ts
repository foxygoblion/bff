import {addAliases} from 'module-alias';
addAliases({
    '@root': __dirname,
    '@interfaces': '${__dirname}/interface',
    '@config': '${__dirname}/config',
    '@middlewares': '${__dirname}/middlewares',
})
import Koa from 'koa';
import config from '@config/index';
import render from 'koa-swig';
import serve from 'koa-static';
import co from 'co';
import { createContainer, Lifetime } from 'awilix';
import { loadControllers } from 'node_modules/awilix-koa/lib/controller';
import { scopePerRequest } from 'node_modules/awilix-koa/lib/scope-per-request';
const container = createContainer();

container.loadModules(['${__dirname}/service/*.ts'], {
    formatName: 'camelCase',
    resolverOptions:{
        lifetime: Lifetime.SCOPED
    },
});

// 
app.use(scopePerRequest(container));
// 加载所有路由
app.use(loadControllers('${__dirname/routers/*.ts}'));