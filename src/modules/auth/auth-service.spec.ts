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

import { AuthService } from './auth-service';


describe('AuthService', () => {
  beforeEachProviders(() => [AuthService]);

  describe('#authenticate()', () => {
    it('should fulfill promise when pin is correct', injectAsync([AuthService], service => {
      return service.authenticate(1234)
        .then(authenticated => {
          expect(authenticated).toBe(true);
        });
    }), 2000);

    it('should reject promise when pin is incorrect', injectAsync([AuthService], service => {
      return service.authenticate(4321)
        .then(authenticated => {
          expect(authenticated).toBe(false);
        });
    }), 2000);
  });
});
