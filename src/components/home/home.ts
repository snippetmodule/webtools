import { Component, View } from 'angular2/core';


@Component({
  selector: 'home'
})

@View({
  template: `
    <h2>Home</h2>
    <h3>{{greeting}}</h3>
  `
})

export class Home {
  greeting: string = 'Hello world!';
}
