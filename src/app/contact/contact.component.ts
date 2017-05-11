import * as $ from 'jquery';

import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AppInsightsService } from '@markpieszak/ng-application-insights';
import { Message } from './../shared/models/message';
import { NavComponent } from './../shared/nav/nav.component';
import { ReCaptchaComponent } from 'angular2-recaptcha';
import { ToastrService } from 'ngx-toastr';
import { environment } from './../../environments/environment';

@Component({
  moduleId: module.id,
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements AfterViewInit {

  @ViewChild(ReCaptchaComponent) captcha: ReCaptchaComponent;
  msgForm: FormGroup;
  message: Message;
  token: string;

  constructor(private fb: FormBuilder, private toastrService: ToastrService, private appInsightsService: AppInsightsService) {
    this.createForm();
    this.token = '';
  }
  createForm() {

    this.msgForm = this.fb.group({
      name: ['', Validators.required],
      // last: ['', Validators.required],
      //       phone: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      msg: ['', [Validators.required, Validators.minLength(10)]]
    });

  }

  ngAfterViewInit(): void {
    $('#bid').removeClass();
    $('#bid').addClass('signup-page');
    console.log('ngAfterViewInit', $('#bid').attr('class'));
  }

  onSubmit({ value, valid }: { value: Message, valid: boolean }) {
    const token = this.captcha.getResponse();
    console.log('RECAPTOKEN', token);
    console.log(value, environment.sendgridkey);
    const helper = require('sendgrid').mail;
    const from_email = new helper.Email(value.email);
    const to_email = new helper.Email('raphael.thiney@gmail.com');
    const subject = value.name + ' sent email from Personal Website!!!!';
    const content = new helper.Content(
      'text/html', value.msg);
    const mail = new helper.Mail(from_email, subject, to_email, content);
    const sg = require('sendgrid')(environment.sendgridkey);
    const request = sg.emptyRequest({
      method: 'POST',
      mode: 'no-cors',
      path: '/v3/mail/send',
      body: mail.toJSON()
    });

    let err: any;
    let res: any;
    sg.API(request, function (error, response) {
      if (error) {
        console.log('Error response received');
        err = error;
        res = response;
      }
      console.log(response.statusCode);
      console.log(response.body);
      console.log(response.headers);
    });

    if (err) {
      this.toastrService.error(res.body, 'Error' + res.statusCode);
      this.appInsightsService.trackEvent('Mail Fail');
    } else {
      this.appInsightsService.trackEvent('Mail Sent');
      this.toastrService.success('Your message was sent!!', 'Email Away!');
      this.msgForm.reset();

    }

    // this.heroService.updateHero(this.hero).subscribe(/* error handling */);

  }

  handleCorrectCaptcha(evt: any): void {
    this.token = evt;

  }
}
