import { Component, NgFor, View } from 'angular2/angular2';
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
