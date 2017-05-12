
import { environment } from '../../environments/environment';
import * as $ from 'jquery';
import { Component, OnInit, AfterViewInit } from '@angular/core';
import { AppInsightsService } from '@markpieszak/ng-application-insights';

@Component({
  selector: 'app-privacy',
  templateUrl: './privacy.component.html',
  styleUrls: ['./privacy.component.css']
})
export class PrivacyComponent implements AfterViewInit {


  env: string;
  constructor(private appInsightsService: AppInsightsService) {
    this.env = environment.envName;
  }
  ngAfterViewInit(): void {

    console.log('Adjusted Classes');
     $('#bid').removeClass();
    $('#bid').addClass('profile-page');
      $.getScript('/assets/js/scripts.js');
  }

}
