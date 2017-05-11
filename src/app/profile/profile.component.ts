import { MailFormComponent } from './../shared/mail-form/mail-form.component';
import { Component, OnInit, AfterViewInit } from '@angular/core';
import { AppInsightsService } from '@markpieszak/ng-application-insights';
import * as $ from 'jquery';

@Component({
  moduleId: module.id,
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit, AfterViewInit {

  // @Input() message: Message;
  constructor(private appInsightsService: AppInsightsService) {

  }
  ngOnInit() {
    $('#bid').removeClass();
    $('#bid').addClass('profile-page');
    console.log('ngOnInit', $('#bid').attr('class'));
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
