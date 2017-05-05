
import { environment } from './../../environments/environment';
import { AppInsightsService } from '@markpieszak/ng-application-insights';
import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {

  constructor(private  appInsightsService: AppInsightsService) {


  }

  ngOnInit() {
  }
ngAfterViewInit() {
this.appInsightsService.trackPageView(); 
    $('#bid').removeClass();
    $('#bid').addClass('landing-page');

  }

//   send() {

// this.appInsightsService.trackPageView();
// const helper = require('sendgrid').mail;
//     const from_email = new helper.Email('raphael@surgipal.com');
//     const to_email = new helper.Email('raphael.thiney@gmail.com');
//     const subject = 'I\'m replacing the subject tag~!!!!';
//     const content = new helper.Content(
//       'text/html', 'I\'m replacing the <strong>body tag</strong>');
//     const mail = new helper.Mail(from_email, subject, to_email, content);
//     const personalization = mail.getPersonalizations();
//     personalization[0].addCustomArg(new helper.CustomArgs('-surgeon-', 'Me Surgeon'));
//     personalization[0].addSubstitution(new helper.Substitution('-patient-', 'Me Patient'));

//     mail.setTemplateId(environment..billingTemplate);
//  const sg = require('sendgrid')(SendGridVars.key);
//  //  var sg = sendgrid(SendGridVars.key)
//     const request = sg.emptyRequest({
//       method: 'POST',
//       mode: 'no-cors',
//       path: '/v3/mail/send',
//       body: mail.toJSON()
// });



// sg.API(request, function(error, response) {
//   if (error) {
//     console.log('Error response received');
//   }
//   console.log(response.statusCode);
//   console.log(response.body);
//   console.log(response.headers);
// });
// }
}
