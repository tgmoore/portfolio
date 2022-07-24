import { animate, state, style, transition, trigger, AnimationEvent } from '@angular/animations';
import { BreakpointObserver } from '@angular/cdk/layout';
import { Component } from '@angular/core';

import { map } from 'rxjs';

@Component({
  selector: 'about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss'],
  animations: [
    trigger('expand', [
      state('small', style({
        height: '100px',
        width: '100px'
      })),
      state('large', style({
        height: '600px',
        width: '800px',
        maxHeight: '90vh',
        maxWidth: '90vw'
      })),
      transition('small => large', [
        animate('.3s')
      ]),
      transition('large => small', [
        animate('.2s')
      ])
    ])
  ]
})
export class AboutMeComponent {
  isExpanded = false;
  isNoticed = false;
  scrollable = true;
  showContent = false;
  showPortrait = this.responsive.observe('(min-width: 850px)').pipe(map(x => x.matches));

  constructor(private responsive: BreakpointObserver) { }

  onAnimationStart(event: AnimationEvent) {
    if (event.fromState === 'small') {
      this.showContent = true;
    }

    this.scrollable = false;
  }

  onAnimationDone(event: AnimationEvent) {
    if (event.toState === 'small') {
      this.showContent = false;
    }

    if (event.toState === 'large') {
      this.scrollable = true;
    }
  }

  toggle() {
    this.isExpanded = !this.isExpanded;
    this.isNoticed = true;
  }
}
