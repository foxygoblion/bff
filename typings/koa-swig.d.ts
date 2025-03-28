// koa-swig.d.ts

declare module 'koa-swig' {
  import { Context, Middleware } from 'koa';

  interface SwigOptions {
    /** 模板根目录 */
    root?: string;
    /** 缓存设置 */
    cache?: boolean | string;
    /** 文件后缀 */
    ext?: string;
    /** 模板变量 */
    locals?: Record<string, any>;
    /** 是否自动转义 */
    autoescape?: boolean;
    /** 缓存大小 */
    cacheSize?: number;
    /** 模板标签开始符 */
    tagControls?: [string, string];
    /** 模板变量标签 */
    variableControls?: [string, string];

    writeBody?: boolean;
  }

  interface SwigRenderFunction {
    (context: Context, options?: SwigOptions): Promise<string>;
  }

  function swig(options?: SwigOptions): Middleware & {
    render: SwigRenderFunction;
  };

  namespace swig {
    export interface Options extends SwigOptions {}
  }

  export = swig;
}