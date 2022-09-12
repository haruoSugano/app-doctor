import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Meu Primeiro Projeto Angular';
  nome = 'jose';
  idade = 20;

  lancarDado() {
    return Math.floor(Math.random() * 6) + 1;
  }
}
