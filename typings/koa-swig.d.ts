// Type definitions for koa-swig
// Project: https://github.com/leecade/koa-swig
// Definitions by: AI Assistant

import * as Koa from 'koa';
import * as swig from 'swig';

declare module 'koa-swig' {
  interface KoaSwigOptions {
    /**
     * Root directory for template files
     */
    root: string;

    /**
     * File extension for templates
     * @default '.html'
     */
    ext?: string;

    /**
     * Caching strategy
     * @default false
     */
    cache?: boolean | 'memory';

    /**
     * Custom Swig configuration options
     */
    swigOptions?: swig.SwigOptions;

    /**
     * Encoding of template files
     * @default 'utf8'
     */
    encoding?: string;
  }

  /**
   * Middleware function for rendering Swig templates in Koa
   * @param options Configuration options for koa-swig
   * @returns Koa middleware function
   */
  function views(options: KoaSwigOptions): Koa.Middleware;

  export = views;
}

// Augment Koa.Context to include render method
declare module 'koa' {
  interface Context {
    /**
     * Render a Swig template
     * @param template Path to the template file
     * @param locals Context variables to pass to the template
     * @returns Promise resolving to rendered HTML
     */
    render(template: string, locals?: Record<string, any>): Promise<string>;
  }
}