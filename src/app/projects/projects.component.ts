import { Component, OnInit } from '@angular/core';
import { AppInsightsService } from '@markpieszak/ng-application-insights';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  constructor(private appInsightsService: AppInsightsService) { }

  ngOnInit() {
            $('#bid').removeClass();
    $('#bid').addClass('profile-page');
  }

}
