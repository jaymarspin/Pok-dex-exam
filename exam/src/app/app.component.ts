import { Component, Inject } from '@angular/core';
import { APP_TITLE } from './app.module';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(@Inject(APP_TITLE) private appTitle: any, private titleSrvc: Title,) {
    this.titleSrvc.setTitle(`${this.appTitle.title}`);
  }

}
