import { AppInsightsService } from '@markpieszak/ng-application-insights';
import { MessageProfile } from './../models/message-profile';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { RequestOptions, Headers } from '@angular/http';

@Component({
  selector: 'app-mail-profile',
  templateUrl: './mail-profile.component.html',
  styleUrls: ['./mail-profile.component.css']
})




export class MailProfileComponent implements OnInit {
  msgForm: FormGroup;
  message: MessageProfile;
  constructor(private fb: FormBuilder, private toastrService: ToastrService, private appInsightsService: AppInsightsService) {
    this.createForm();

  }
  createForm() {

    this.msgForm = this.fb.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      jobb: ['', Validators.required],
      street: ['', Validators.required],
      streetnum: ['', Validators.required],
      country: ['', Validators.required],
      msg: ['', [Validators.required, Validators.minLength(10)]]
    });

  }

  ngOnInit() {
    $.getScript('/assets/js/material-bootstrap-wizard.js');
  }  onSubmit({ value, valid }: { value: MessageProfile, valid: boolean }) {

  }

fileChange(event) {
    const fileList: FileList = event.target.files;
    if (fileList.length > 0) {
        const file: File = fileList[0];
        const formData: FormData = new FormData();
        formData.append('uploadFile', file, file.name);
        const headers = new Headers();
        headers.append('enctype', 'multipart/form-data');
        headers.append('Accept', 'application/json');
        const options = new RequestOptions({ headers: headers });
        // this.http.post(`${this.apiEndPoint}`, formData, options)
        //     .map(res => res.json())
        //     .catch(error => Observable.throw(error))
        //     .subscribe(
        //         data => console.log('success'),
        //         error => console.log(error)
        //     );
    }
}
}

