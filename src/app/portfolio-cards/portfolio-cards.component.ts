import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'portfolio-cards',
  standalone: true,
  templateUrl: './portfolio-cards.component.html',
  styleUrls: ['./portfolio-cards.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PortfolioCardsComponent {
  private actionCodes = new Set(['Enter', 'Space', ' ', 'Spacebar']);

  constructor() { }

  goTo(event: KeyboardEvent | MouseEvent, link: string) {
    
    if (event.type === 'click'
        || this.actionCodes.has((event as KeyboardEvent)?.code)) {
        window.open(link);
    }
  }
}
