import * as $ from 'jquery';

import { Component, OnInit } from '@angular/core';

import { AppInsightsService } from '@markpieszak/ng-application-insights';

@Component({
  selector: 'app-privacy',
  templateUrl: './privacy.component.html',
  styleUrls: ['./privacy.component.css']
})
export class PrivacyComponent implements OnInit {

  constructor(private appInsightsService: AppInsightsService) { }

  ngOnInit() {

    $('#bid').removeClass();
    $('#bid').addClass('profile-page');
  }

}
