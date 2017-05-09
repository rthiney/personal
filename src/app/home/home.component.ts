import { environment } from './../../environments/environment';
import { AppInsightsService } from '@markpieszak/ng-application-insights';
import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private appInsightsService: AppInsightsService) {
  }

  ngOnInit() {
    $('#bid').removeClass();
    $('#bid').addClass('landing-page');
  }
}
