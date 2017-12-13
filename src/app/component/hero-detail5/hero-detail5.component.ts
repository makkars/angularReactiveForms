import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';


import { states } from '../../model/data-model';

@Component({
  selector: 'app-hero-detail5',
  templateUrl: './hero-detail5.component.html',
  styleUrls: ['./hero-detail5.component.css']
})
export class HeroDetail5Component implements OnInit {

  heroForm: FormGroup
  states = states;

  createForm(): any {
    this.heroForm = this.fb.group({
      name: ['', Validators.required],
      address: this.fb.group({
        street: '',
        city: '',
        state: '',
        zip: '',
      }),
      power: '',
      sidekick: ''
    });
  }

  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  ngOnInit() {
  }


}
