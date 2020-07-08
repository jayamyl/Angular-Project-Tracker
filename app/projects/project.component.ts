import { Component, OnInit } from '@angular/core';
import { Project } from './models/Project';
import { ProjectOperationsService } from './services/projectOperations.service';
@Component({
  selector: 'app-bug-tracker',
  templateUrl: 'project.component.html',
})
export class ProjectComponent implements OnInit {
  projects: Project[] = [];

  sortAttr: string = 'name';
  sortDesc: boolean = false;

  constructor(private projectOperations: ProjectOperationsService) {}

  ngOnInit() {
    this.loadProjects();
  }

  loadProjects() {
    this.projectOperations
      .getAll()
      .subscribe((projects) => (this.projects = projects));
  }
  onRemoveClick(project: Project) {
    this.projectOperations.remove(project).subscribe((newProject) => {
      this.loadProjects();
    });
  }
}
