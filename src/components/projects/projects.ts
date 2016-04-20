import {NgFor} from "angular2/common";
import {Component} from "angular2/core";
import {ProjectService} from "../../modules/project/project-service";


@Component({
  selector: 'projects',
  viewProviders: [
    ProjectService
  ],
  directives: [
    NgFor
  ],
  styleUrls: ['./components/projects/projects.css'],
  templateUrl: './components/projects/projects.html'
})

export class Projects {
  loaded: Promise<any>;

  constructor(public projects: ProjectService) {
    this.loaded = projects.fetchProjects(1234);
  }
}
