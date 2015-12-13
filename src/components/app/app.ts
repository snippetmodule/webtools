import { Component, View } from 'angular2/core';
import { RouteConfig, RouterLink, RouterOutlet } from 'angular2/router';
import { Home } from '../home/home';
import { Projects } from '../projects/projects';


@Component({
  selector: 'app'
})

@View({
  directives: [
    RouterLink,
    RouterOutlet
  ],

  template: `
    <header>
      <a [routerLink]="['/Home']">Home</a> | <a [routerLink]="['/Projects']">Projects</a>
    </header>

    <main>
      <router-outlet></router-outlet>
    </main>
  `
})

@RouteConfig([
  {path: '/', component: Home, as: 'Home'},
  {path: '/projects', component: Projects, as: 'Projects'}
])

export class App {}
