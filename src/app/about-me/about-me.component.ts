import { animate, state, style, transition, trigger, AnimationEvent } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

import { BehaviorSubject, Observable, throttleTime, tap } from 'rxjs';

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
export class AboutMeComponent implements OnInit {
  private _canShake = new BehaviorSubject(true);

  canShake = this._observeShake();
  isExpanded = false;
  showContent = false;

  constructor() { }

  ngOnInit(): void {
  }

  onAnimationDone(event: AnimationEvent) {
    this._canShake.next(event.toState === 'small');
  }

  onAnimationStart(event: AnimationEvent) {
    this.showContent = event.fromState === 'small';
  }

  toggle() {
    this._canShake.next(this.isExpanded);
    this.isExpanded = !this.isExpanded;
  }

  _observeShake() {
    return this._canShake.asObservable().pipe(
      throttleTime(500),
      tap(console.log)
    );
  }
}
