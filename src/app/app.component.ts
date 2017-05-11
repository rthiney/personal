
import { environment } from './../environments/environment';
import { AppInsightsService } from '@markpieszak/ng-application-insights';
import { Component, AfterViewInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
// declare var jQuery:any;
import * as $ from 'jquery';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  title = environment.envName;

  constructor(private appinsightsService: AppInsightsService, private titleService: Title) {

  }
  ngAfterViewInit() {
    $('#bid').removeClass();
    $('#bid').addClass('landing-page');
    $.getScript('/assets/js/scripts.js');

  }
  public setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle);
  }
}


