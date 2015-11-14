import { Component, NgFor, View } from 'angular2/angular2';
import { ProjectService } from '../../modules/project/project-service';


@Component({
  selector: 'projects',
  viewProviders: [
    ProjectService
  ]
})

@View({
  directives: [
    NgFor
  ],
  styleUrls: ['components/projects/projects.css'],
  templateUrl: 'components/projects/projects.html'
})

export class Projects {
  loaded: Promise<any>;

  constructor(public projects: ProjectService) {
    this.loaded = projects.fetchProjects(1234);
  }
}
