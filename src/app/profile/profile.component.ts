
import { NavComponent } from './../shared/nav/nav.component';
import { Component, OnInit, AfterViewInit } from '@angular/core';
import { AppInsightsService } from '@markpieszak/ng-application-insights';
 
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit, AfterViewInit {

  constructor(private appInsightsService: AppInsightsService) { }

  ngOnInit() {

  }
  ngAfterViewInit() { 
 
    $('#bid').removeClass();
    $('#bid').addClass('profile-page');
  }
}
