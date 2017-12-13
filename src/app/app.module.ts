import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



import { AppComponent } from './app.component';
import { HeroDetailComponent } from './component/hero-detail/hero-detail.component';
import { HeroDetail2Component } from './component/hero-detail2/hero-detail2.component';
import { HeroDetail3Component } from './component/hero-detail3/hero-detail3.component';
import { HeroDetail4Component } from './component/hero-detail4/hero-detail4.component';


@NgModule({
  declarations: [
    AppComponent,
    HeroDetailComponent,
    HeroDetail2Component,
    HeroDetail3Component,
    HeroDetail4Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
