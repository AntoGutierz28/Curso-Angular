import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'primerApp';
  public contador: Array<string> = [];
  ngOnInit(): void {
    this.contador = ['Hola mundo 1', 'Hola mundo 2', 'Hola mundo 3'];
  }
}
