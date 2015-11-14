/* tslint:disable:no-unused-variable typedef */
import { Component } from 'angular2/angular2';
import {
  afterEach,
  beforeEach,
  describe,
  fdescribe,
  xdescribe,
  expect,
  it,
  fit,
  xit,
  beforeEachProviders,
  inject,
  injectAsync,
  TestComponentBuilder
} from 'angular2/testing';

import { Home } from './home';


@Component({
  template: '',
  directives: [Home]
})
class TestComponent {}


describe('Home', () => {
  it('should display a greeting', injectAsync([TestComponentBuilder], tcb => {
    return tcb.createAsync(Home)
      .then(fixture => {
        fixture.detectChanges();
        let compiled = fixture.debugElement.nativeElement;

        expect(compiled.querySelector('h3')).toHaveText('Hello world!');
      });
  }));

  it('should display a greeting (overrideTemplate)', injectAsync([TestComponentBuilder], tcb => {
    return tcb.overrideTemplate(TestComponent, '<home></home>')
      .createAsync(Home)
      .then(fixture => {
        fixture.detectChanges();
        let compiled = fixture.debugElement.nativeElement;

        expect(compiled.querySelector('h3')).toHaveText('Hello world!');
      });
  }));
});
