import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroDetail6Component } from './hero-detail6.component';

describe('HeroDetail6Component', () => {
  let component: HeroDetail6Component;
  let fixture: ComponentFixture<HeroDetail6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroDetail6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroDetail6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
