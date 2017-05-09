
import { environment } from './../../environments/environment';
import { Component, OnInit, AfterViewInit, Input } from '@angular/core';
import { AppInsightsService } from '@markpieszak/ng-application-insights';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Message } from './../shared/models/message';
import * as sendgrid from 'sendgrid';
import * as $ from 'jquery';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  env = environment.envName;
  msgForm: FormGroup;
  // @Input() message: Message;
  constructor(private fb: FormBuilder, private appInsightsService: AppInsightsService) {
    this.createForm();

  }
  createForm() {

  this.msgForm =  this.fb.group({
   name: ['', Validators.required],
  email: ['', [Validators.required, Validators.email ]],
 msg: ['', [Validators.required, Validators.minLength(10)]]
  });


  }
  ngOnInit() {
    $('#bid').removeClass();
    $('#bid').addClass('profile-page');
  }

  ngOnChanges() {
    // this.msgForm.reset({
    //   name: this.message.name,
    //   email: this.message.email,
    //   msg: this.message.msg
    // });
  }



  onSubmit({ value, valid }: { value: Message, valid: boolean }) {

    this.appInsightsService.trackEvent('Email Sent');
    const helper = require ('sendgrid').mail;
    const from_email = new helper.Email(value.email);
    const to_email = new helper.Email('raphael.thiney@gmail.com');
    const subject = value.name + ' sent email from Personal Website!!!!';
    const content = new helper.Content(
      'text/html', value.msg);
    const mail = new helper.Mail(from_email, subject, to_email, content);
    const sg = require('sendgrid')(environment.sendgrid.key);

    const request = sg.emptyRequest({
      method: 'POST',
      mode: 'no-cors',
      path: '/v3/mail/send',
      body: mail.toJSON()
    });



    sg.API(request, function (error, response) {
      if (error) {
        console.log('Error response received');
      }
      alert(response.body);
      console.log(response.statusCode);
      console.log(response.body);
      console.log(response.headers);
    });

    // this.heroService.updateHero(this.hero).subscribe(/* error handling */);
    this.ngOnChanges();
  }
}
