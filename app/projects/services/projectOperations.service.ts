import { Project } from '../models/Project';
import { Injectable } from '@angular/core';
import { ProjectApiService } from './projectApi.service';
import { Observable } from 'rxjs';

@Injectable()
export class ProjectOperationsService {
  constructor(private ProjectApi: ProjectApiService) {}
  createNew(projectName: string): Observable<Project> {
    const newProject = {
      id: 0,
      name: projectName,
    };
    return this.ProjectApi.save(newProject);
  }

  getAll(): Observable<Project[]> {
    return this.ProjectApi.getAll();
  }

  remove(project: Project): Observable<any> {
    return this.ProjectApi.remove(project);
  }
}
