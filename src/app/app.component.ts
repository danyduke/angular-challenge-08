import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-challenge-08';

  onomatopoiaList: Array<string> = [];
  onReceiveNewOnomotopia(event: string): void {
    this.onomatopoiaList.push(event);
  }
}
