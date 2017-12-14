import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroDetail7Component } from './hero-detail7.component';

describe('HeroDetail7Component', () => {
  let component: HeroDetail7Component;
  let fixture: ComponentFixture<HeroDetail7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroDetail7Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroDetail7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
