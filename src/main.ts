import { bootstrap, provide } from 'angular2/angular2';
import { APP_BASE_HREF, ROUTER_PROVIDERS } from 'angular2/router';
import { AUTH_PROVIDERS } from './modules/auth/providers';
import { App } from './components/app/app';


bootstrap(App, [
  provide(APP_BASE_HREF, {useValue: '/'}),
  ROUTER_PROVIDERS,
  AUTH_PROVIDERS
]).catch((error: Error) => console.error(error));
