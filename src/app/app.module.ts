import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgOptimizedImage } from '@angular/common';
import { NgModule } from '@angular/core';

import { BarComponent } from './bar/bar.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { AppComponent } from './app.component';
import { PortfolioCardsComponent } from './portfolio-cards/portfolio-cards.component';

@NgModule({
  declarations: [
    AppComponent,
    PortfolioCardsComponent,
    BarComponent,
    AboutMeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgOptimizedImage
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
