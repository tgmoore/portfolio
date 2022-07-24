import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'portfolio-cards',
  templateUrl: './portfolio-cards.component.html',
  styleUrls: ['./portfolio-cards.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PortfolioCardsComponent {
  constructor() { }

  goTo(link: string) {
    window.open(link);
  }
}
