import { Meta } from '@angular/platform-browser';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
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
