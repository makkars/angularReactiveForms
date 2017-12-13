import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms'

@Component({
  selector: 'app-hero-detail3',
  templateUrl: './hero-detail3.component.html',
  styleUrls: ['./hero-detail3.component.css']
})
export class HeroDetail3Component implements OnInit {

  heroForm: FormGroup

  createForm(): any {
    this.heroForm = this.fb.group({
      name: ''
    });
  }

  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  ngOnInit() {
  }

}
