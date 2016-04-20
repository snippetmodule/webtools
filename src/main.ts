/// <reference path="../node_modules/angular2/typings/browser.d.ts" />

import {provide} from "angular2/core";
import {bootstrap} from "angular2/platform/browser";
import {APP_BASE_HREF, ROUTER_PROVIDERS} from "angular2/router";
import {App} from "./components/app/app";
import {AUTH_PROVIDERS} from "./modules/auth/providers";

// root component

// modules


bootstrap(App, [
  ROUTER_PROVIDERS,
  AUTH_PROVIDERS,
  provide(APP_BASE_HREF, {useValue: '/'})
]).catch((error: Error) => console.error(error));
