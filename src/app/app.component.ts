import { Component } from '@angular/core';
import { Meta } from '@angular/platform-browser';

import { AboutMeComponent } from './about-me/about-me.component';
import { BarComponent } from './bar/bar.component';
import { PortfolioCardsComponent } from './portfolio-cards/portfolio-cards.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [AboutMeComponent, BarComponent, PortfolioCardsComponent]
})
export class AppComponent {
  title = 'tgmoore';

  constructor(private _meta: Meta) {
    this._meta.addTags([
      { name: 'description', content: 'Tyler Moore\'s personal website where he provides a short bio, list of skills, and links to his other active accounts' },
      { name: 'keywords', content: 'software engineer, applications developer, programmer'}
    ]);
  }

}
