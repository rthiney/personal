import { PrivacyComponent } from './privacy/privacy.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { ProjectsComponent } from './projects/projects.component';
import { ClientsComponent } from './clients/clients.component';
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders  } from '@angular/core';

const routes: Routes = [
  { path: '', component: HomeComponent  },
  { path: 'profile', component: ProfileComponent },
  { path: 'clients', component: ClientsComponent },
  { path: 'projects', component: ProjectsComponent },
    { path: 'contact', component: ContactComponent },
        { path: 'privacy', component: PrivacyComponent },
  { path: '**', redirectTo: '' ,pathMatch: 'full' }
];
// @NgModule({
export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
///export const AppRoutes = RouterModule.forChild(routes);
