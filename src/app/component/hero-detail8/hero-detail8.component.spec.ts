import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroDetail8Component } from './hero-detail8.component';

describe('HeroDetail8Component', () => {
  let component: HeroDetail8Component;
  let fixture: ComponentFixture<HeroDetail8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroDetail8Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroDetail8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
