import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { ProjectsComponent } from './projects/projects.component';
import { ClientsComponent } from './clients/clients.component';
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders  } from '@angular/core';

const routes: Routes = [
  { path: '', component: HomeComponent,  pathMatch: 'full' },
  { path: 'profile', component: ProfileComponent },
  { path: 'clients', component: ClientsComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: '**', redirectTo: '' ,pathMatch: 'full' }
];
// @NgModule({
export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
///export const AppRoutes = RouterModule.forChild(routes);
