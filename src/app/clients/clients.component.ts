import { companies, Company } from './../shared/models/companies';
import { Component, OnInit } from '@angular/core';
import { AppInsightsService } from '@markpieszak/ng-application-insights';
 import * as $ from 'jquery';



@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent implements OnInit {
cos: Company[]= [];
cos1: Company[]= [];
cos2: Company[]= [];
cos3: Company[]= [];

  constructor(private  appInsightsService: AppInsightsService) {
console.log(companies.length, companies);
this.cos = companies.sort((a, b) => a.id - b.id);
console.log('cos', this.cos);

this.cos1 =  this.cos.slice(0, 2);
console.log('cos1', this.cos1);

this.cos2  =  this.cos.slice(3, 5);
console.log('co2s', this.cos2);
this.cos3 =   this.cos.slice(6, 8);
console.log('cos3', this.cos3);
  }
  ngOnInit() {
    console.log('Adjusted Classes');
        $('#bid').removeClass();
    $('#bid').addClass('profile-page');
      $.getScript('/assets/js/scripts.js');
  }
}
