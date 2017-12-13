import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-hero-detail2',
  templateUrl: './hero-detail2.component.html',
  styleUrls: ['./hero-detail2.component.css']
})

export class HeroDetail2Component implements OnInit {

  heroForm = new FormGroup({
    name: new FormControl()
  });

  constructor() { }

  ngOnInit() {
  }
}
