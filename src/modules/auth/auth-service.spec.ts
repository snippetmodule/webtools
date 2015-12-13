/* tslint:disable:no-unused-variable typedef */
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
  TestComponentBuilder
} from 'angular2/testing';

import { AuthService } from './auth-service';


describe('AuthService', () => {
  beforeEachProviders(() => [AuthService]);

  describe('#authenticate()', () => {
    it('should fulfill promise when pin is correct', inject([AuthService], service => {
      service.authenticate(1234)
        .then(authenticated => {
          expect(authenticated).toBe(true);
        });
    }));

    it('should reject promise when pin is incorrect', inject([AuthService], service => {
      service.authenticate(4321)
        .then(authenticated => {
          expect(authenticated).toBe(false);
        });
    }));
  });
});
