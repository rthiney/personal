import { environment } from './../environments/environment';
import { MailFormComponent } from './shared/mail-form/mail-form.component';
import { NavComponent } from './shared/nav/nav.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, enableProdMode, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {  ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { ClientsComponent } from './clients/clients.component';
import { ProfileComponent } from './profile/profile.component';
import { routing } from './app.routing';
import { PrivacyComponent } from './privacy/privacy.component';
import { ApplicationInsightsModule, AppInsightsService } from '@markpieszak/ng-application-insights';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProjectsComponent,
    ClientsComponent,
    ProfileComponent,
    NavComponent
    ,
    PrivacyComponent,
    MailFormComponent
  ],
  imports: [

    BrowserModule,
    HttpModule,
   // FormsModule,
    ReactiveFormsModule,
    routing,
    ApplicationInsightsModule.forRoot({
      instrumentationKey:   environment.insightKey
    })
  ],
  providers: [AppInsightsService],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
