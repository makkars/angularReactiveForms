import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';


import { states } from '../../model/data-model';

@Component({
  selector: 'app-hero-detail4',
  templateUrl: './hero-detail4.component.html',
  styleUrls: ['./hero-detail4.component.css']
})
export class HeroDetail4Component implements OnInit {

  heroForm: FormGroup
  states = states;

  createForm(): any {
    this.heroForm = this.fb.group({
      name: ['', Validators.required],
      street: '',
      city: '',
      state: '',
      zip: '',
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
