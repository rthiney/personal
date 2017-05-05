import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { ProjectsComponent } from './projects/projects.component';
import { ClientsComponent } from './clients/clients.component';
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders  } from '@angular/core';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'clients', component: ClientsComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: '**', redirectTo: '' }
];
// @NgModule({
export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
///export const AppRoutes = RouterModule.forChild(routes);
