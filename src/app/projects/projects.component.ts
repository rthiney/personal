
import { Component, OnInit, AfterViewInit } from '@angular/core';
import { AppInsightsService } from '@markpieszak/ng-application-insights';
import * as $ from 'jquery';
@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit, AfterViewInit{

  constructor(private appInsightsService: AppInsightsService) { }

  ngOnInit() {
    $('#bid').removeClass();
    $('#bid').addClass('profile-page');
  }
  ngAfterViewInit(): void {
    try {
      $.getScript('/assets/js/material-kit.js');
      $.getScript('/assets/js/scripts.js');
    } catch (e) {
      console.error('Error', e);
      console.exception(e);
    }
  }
}
