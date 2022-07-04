import { animate, state, style, transition, trigger, AnimationEvent } from '@angular/animations';
import { Component } from '@angular/core';

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
  showContent = false;

  constructor() { }

  onAnimationStart(event: AnimationEvent) {
    this.showContent = event.fromState === 'small';
  }

  toggle() {
    this.isExpanded = !this.isExpanded;
    this.isNoticed = true;
  }
}
