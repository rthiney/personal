import { Component, OnInit } from '@angular/core';
import { AppInsightsService } from '@markpieszak/ng-application-insights';
 import * as $ from 'jquery';
@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent implements OnInit {

  constructor(private  appInsightsService: AppInsightsService) {
  }
  ngOnInit() {
        $('#bid').removeClass();
    $('#bid').addClass('profile-page');
  }

}
