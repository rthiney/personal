import { environment  } from './../environments/environment';
import { AppInsightsService } from '@markpieszak/ng-application-insights';
import { Component, AfterViewInit } from '@angular/core';
 

@Component({
    moduleId: module.id,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  title = 'app works!';

    constructor(private appinsightsService: AppInsightsService) {

    }
     ngAfterViewInit() {

  // $.getScript('/assets/js/scripts.js');

    }
}


