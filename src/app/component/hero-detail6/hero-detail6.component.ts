import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';


import { states, Address, Hero } from '../../model/data-model';
import { Input } from '@angular/core';

@Component({
  selector: 'app-hero-detail6',
  templateUrl: './hero-detail6.component.html',
  styleUrls: ['./hero-detail6.component.css']
})
export class HeroDetail6Component implements OnInit {

  @Input() hero: Hero;

  heroForm: FormGroup
  states = states;

  createForm(): any {
    this.heroForm = this.fb.group({
      name: ['', Validators.required],
      address: this.fb.group(new Address()),
      power: '',
      sidekick: ''
    });
  }

  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  ngOnInit() {
  }

  ngOnChanges() {
    this.heroForm.reset({
      name: this.hero.name,
      address: this.hero.addresses[0] || new Address()
    });
  }
}
