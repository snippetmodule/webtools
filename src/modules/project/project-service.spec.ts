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

import { AuthService } from '../auth/auth-service';
import { ProjectService } from './project-service';


describe('ProjectService', () => {
  beforeEachProviders(() => [AuthService, ProjectService]);

  it('should initialize an empty list', inject([ProjectService], service => {
    expect(Array.isArray(service.list)).toBe(true);
  }));

  it('should fetch projects if provided pin is correct', injectAsync([ProjectService], service => {
    return service.fetchProjects(1234)
      .then(list => {
        expect(list.length).toBe(2);
      });
  }), 2000);
});
