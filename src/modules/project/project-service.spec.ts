/* tslint:disable:no-unused-variable typedef */
/// <reference path="../../../typings/main/ambient/jasmine/index.d.ts" />
import {describe, expect, it, beforeEachProviders, inject} from "angular2/testing";
import {AuthService} from "../auth/auth-service";
import {ProjectService} from "./project-service";


describe('ProjectService', () => {
  beforeEachProviders(() => [AuthService, ProjectService]);

  it('should initialize an empty list', inject([ProjectService], service => {
    expect(Array.isArray(service.list)).toBe(true);
  }));

  it('should fetch projects if provided pin is correct', inject([ProjectService], service => {
    service.fetchProjects(1234)
      .then(list => {
        expect(list.length).toBe(2);
      });
  }));
});
