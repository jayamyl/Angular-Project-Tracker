import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UtilsModule } from './utils/utils.module';

import { AppComponent } from './app.component';
import { ProjectComponent } from './projects/project.component';
import { ProjectEditComponent } from './projects/views/projectEdit.component';
import { ProjectOperationsService } from './projects/services/projectOperations.service';
import { ProjectApiService } from './projects/services/projectApi.service';
import { LoginComponent } from './bugTracker/auth/Login.component';

import { BugTrackerComponent } from './bugTracker/bugTracker.component';
import { BugOperationsService } from './bugTracker/services/bugOperations.services';
import { ClosedCountPipe } from './bugTracker/pipes/closedCount.pipe';
import { BugStorageService } from './bugTracker/services/bugStorage.service';
import { BugServerService } from './bugTracker/services/bugServer.service';
import { BugStatsComponent } from './bugTracker/views/bugStats.component';
import { BugEditComponent } from './bugTracker/views/bugEdit.component';
import { BugDetailsComponent } from './bugTracker/views/bugDetails.component';
import { RouterModule, Routes } from '@angular/router';
import { LoggedInGuard } from './bugTracker/auth/LoggedInGuard';

//Routing
let routes: Routes = [
  { path: '', redirectTo: '/bugs', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'add', component: BugEditComponent },
  { path: 'details/:id', component: BugDetailsComponent },
  {
    path: 'projects',
    component: ProjectComponent,
    canActivate: [LoggedInGuard],
  },
  {
    path: 'addproject',
    component: ProjectEditComponent,
    canActivate: [LoggedInGuard],
  },
  {
    path: 'bugs',
    component: BugTrackerComponent,
    canActivate: [LoggedInGuard],
  },
];

@NgModule({
  declarations: [
    AppComponent,
    BugTrackerComponent,
    ClosedCountPipe,
    BugStatsComponent,
    BugEditComponent,
    BugDetailsComponent,
    LoginComponent,
    ProjectComponent,
    ProjectEditComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    UtilsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
  ],
  providers: [
    BugOperationsService,
    BugStorageService,
    BugServerService,
    ProjectOperationsService,
    ProjectApiService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
