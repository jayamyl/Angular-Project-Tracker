import { Component, Output, EventEmitter } from '@angular/core';
import { ProjectOperationsService } from '../services/projectOperations.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-project-edit',
  template: `
    <section class="edit">
      <label for="">Project Name :</label>
      <input type="text" [(ngModel)]="newProjectName" />
      <span> [ {{ newProjectName.length }} ] </span>
      <input type="button" value="Add New" (click)="onAddNewClick()" />
    </section>
  `,
})
export class ProjectEditComponent {
  newProjectName: string = '';

  constructor(
    private projectOperations: ProjectOperationsService,
    private router: Router
  ) {}
  onAddNewClick() {
    console.log('cmp', this.newProjectName);
    this.projectOperations
      .createNew(this.newProjectName)
      .subscribe((newProject) => {
        this.router.navigate(['projects']);
      });
  }
}
