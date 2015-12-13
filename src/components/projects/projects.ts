import { NgFor } from 'angular2/common';
import { Component, View } from 'angular2/core';
import { ProjectService } from '../../modules/project/project-service';


@Component({
  moduleId: module.id,
  selector: 'projects',
  viewProviders: [
    ProjectService
  ]
})

@View({
  directives: [
    NgFor
  ],
  styleUrls: ['./projects.css'],
  templateUrl: './projects.html'
})

export class Projects {
  loaded: Promise<any>;

  constructor(public projects: ProjectService) {
    this.loaded = projects.fetchProjects(1234);
  }
}
