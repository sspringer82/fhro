import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  isShowForm = false;

  showForm() {
    this.isShowForm = true;
  }

  hideForm() {
    this.isShowForm = false;
  }
}
