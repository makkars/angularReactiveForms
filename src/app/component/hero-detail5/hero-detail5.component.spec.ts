import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroDetail5Component } from './hero-detail5.component';

describe('HeroDetail5Component', () => {
  let component: HeroDetail5Component;
  let fixture: ComponentFixture<HeroDetail5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroDetail5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroDetail5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
