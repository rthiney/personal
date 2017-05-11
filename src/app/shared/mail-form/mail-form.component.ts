import { AppComponent } from './../../app.component';
import { environment } from './../../../environments/environment';
import { ToastrService } from 'ngx-toastr';
import { Component, OnInit, AfterViewInit, Input } from '@angular/core';
import { AppInsightsService } from '@markpieszak/ng-application-insights';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Message } from './../models/message';
import * as sendgrid from 'sendgrid';
import * as $ from 'jquery';

@Component({
  moduleId: module.id,
  selector: 'app-mail-form',
  templateUrl: './mail-form.component.html',
  styleUrls: ['./mail-form.component.css']
})
export class MailFormComponent implements OnInit  {


  msgForm: FormGroup;
  message: Message;
  // @Input() message: Message;
  constructor(private fb: FormBuilder, private toastrService: ToastrService, private appInsightsService: AppInsightsService) {
    this.createForm();

  }
  createForm() {
 this.msgForm = this.fb.group({
      name: ['' ],
          last: ['' ],
          phone: ['' ],
      email: ['', ],
      msg: ['', ]
    });
    // this.msgForm = this.fb.group({
    //   name: ['', Validators.required],
    //       last: ['', Validators.required],
    //       phone: ['', Validators.required],
    //   email: ['', [Validators.required, Validators.email]],
    //   msg: ['', [Validators.required, Validators.minLength(10)]]
    // });


  }
  ngOnInit() {



  }





  onSubmit({ value, valid }: { value: Message, valid: boolean }) {



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
    }     else     {
      this.appInsightsService.trackEvent('Mail Sent');
      this.toastrService.success('Your message was sent!!', 'Email Away!');
      this.msgForm.reset();
    }


    // this.heroService.updateHero(this.hero).subscribe(/* error handling */);



  }
}
