import { MailFormComponent } from './../shared/mail-form/mail-form.component';
import { environment } from './../../environments/environment';
import { AppInsightsService } from '@markpieszak/ng-application-insights';
import { Component, OnInit, AfterViewInit } from '@angular/core';

import * as $ from 'jquery';
@Component({
      moduleId: module.id,
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {

  constructor(private appInsightsService: AppInsightsService) {
  }

  ngOnInit() {
 $.getScript('/assets/js/scripts.js');


  }
ngAfterViewInit()
{
    $('#bid').attr('class','landing-page');
     console.log('ngAfterViewInit', $('#bid').attr('class'));
      $.getScript('/assets/js/scripts.js');
}
}
