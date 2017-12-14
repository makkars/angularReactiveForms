import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeroService } from './service/hero.service';


import { AppComponent } from './app.component';
import { HeroDetailComponent } from './component/hero-detail/hero-detail.component';
import { HeroDetail2Component } from './component/hero-detail2/hero-detail2.component';
import { HeroDetail3Component } from './component/hero-detail3/hero-detail3.component';
import { HeroDetail4Component } from './component/hero-detail4/hero-detail4.component';
import { HeroDetail5Component } from './component/hero-detail5/hero-detail5.component';
import { HeroDetail6Component } from './component/hero-detail6/hero-detail6.component';
import { HeroListComponent } from './component/hero-list/hero-list.component';
import { HeroDetail7Component } from './component/hero-detail7/hero-detail7.component';
import { HeroDetail8Component } from './component/hero-detail8/hero-detail8.component';


@NgModule({
  declarations: [
    AppComponent,
    HeroDetailComponent,
    HeroDetail2Component,
    HeroDetail3Component,
    HeroDetail4Component,
    HeroDetail5Component,
    HeroDetail6Component,
    HeroListComponent,
    HeroDetail7Component,
    HeroDetail8Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [HeroService],
  bootstrap: [AppComponent]
})
export class AppModule { }
