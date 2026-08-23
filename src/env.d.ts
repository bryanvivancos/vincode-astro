/// <reference types="astro/client" />

declare module "astro/jsx-runtime" {
    export function Fragment(props: { children?: any }): any;
    export function jsx(type: any, props: any, key?: any): any;
    export function jsxs(type: any, props: any, key?: any): any;
    export function jsxDEV(type: any, props: any, key?: any): any;
    export import JSX = astroHTML.JSX;
}

declare module "astro/jsx-dev-runtime" {
    export function Fragment(props: { children?: any }): any;
    export function jsx(type: any, props: any, key?: any): any;
    export function jsxs(type: any, props: any, key?: any): any;
    export function jsxDEV(type: any, props: any, key?: any): any;
    export import JSX = astroHTML.JSX;
}
