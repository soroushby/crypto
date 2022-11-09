import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.scss'],
})
export class ContactusComponent implements OnInit {
  contactUsForm: FormGroup = new FormGroup({});
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.contactUsForm = this.fb.group({
      firstName: ['', Validators.required],
      lasttName: ['', Validators.required],
      email: ['', Validators.required],
      address: ['', Validators.required],
      gender: ['', Validators.required],
      birthDate: ['', Validators.required],
      phone: ['', Validators.required],
    });
  }
}
