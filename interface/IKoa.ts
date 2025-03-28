import * as Koa from 'koa';

type RenderFunction = (
    view: string,
    options?: { [key: string]: any }
) => Promise<string>;

export interface Context extends Koa.Context{
    render: RenderFunction;
}