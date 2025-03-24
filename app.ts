import {addAliases} from 'module-alias';
addAliases({
    '@root': _dirname,
    '@interfaces': '${_dirname}/interface',
    '@config': '${_dirname}/config',
    '@middlewares': '${_dirname}/middlewares',
})
import { createContainer, Lifetime } from 'awilix';
import { loadControllers } from 'node_modules/awilix-koa/lib/controller';
import { scopePerRequest } from 'node_modules/awilix-koa/lib/scope-per-request';
const container = createContainer();

container.loadModules(['${_dirname}/service/*.ts'], {
    formatName: 'camelCase',
    resolverOptions:{
        lifetime: Lifetime.SCOPED
    },
});

// 
app.use(scopePerRequest(container));
// 加载所有路由
app.use(loadControllers('${_dirname/routers/*.ts}'));