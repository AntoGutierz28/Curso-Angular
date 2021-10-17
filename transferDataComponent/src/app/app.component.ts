import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'transferDataComponent';
  public lista: Array<String> = [];
  ngOnInit() {
    this.lista = ['Anker', 'Antonio', 'Marcos'];
  }
}
