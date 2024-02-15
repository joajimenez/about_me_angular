import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AboutComponent } from './about/about.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AboutComponent],
  templateUrl: './app.component.html',
  // template: `<div class="container">
  //   <h1>Bienvenido a la pagina de Joan Jimenez</h1>
  //   <h4>Haz click en el botón 👀</h4>
  //   <button>Entrar</button>
  // </div> `,
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'about_me';
}
