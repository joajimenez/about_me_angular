import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  // templateUrl: './about.component.html',
  template: `<div class='container'>
    <img src="./assets/PXL_20211201_163405442.MP.jpg" alt="" />
    <div class="hero-text-container">
      <h1>Joan Jimenez</h1>
      <h2>Teacher and Desarrollador</h2>
    </div>
    <div class="favorites-list">
      <ul>
        <h3>Mis favoritos:</h3>
        <li>📚 Aprender</li>
        <li>😋 Comer</li>
        <li>🎥 Ver Series</li>
        <li>🫱🏻‍🫲🏿 Conocer gente</li>
      </ul>
    </div>
    <div>
      <h3>¿Quieres saber más?</h3>
      <p>
        Soy una persona que le gusta aprender, me gusta la tecnología, la
        programación, la enseñanza y la comida. Me gusta conocer gente nueva y
        aprender de ellos. Me gusta la música, el cine y las series. Me gusta
        compartir lo que sé y aprender de los demás.
      </p>
    </div>
    <div>
      <h3>Contacto</h3>
      <p>
        Puedes contactarme en mis redes sociales o en mi correo electrónico.
      </p>
      <li>
        <a href="https://www.linkedin.com/in/joan-jimenez-7b6a6b1b7/"
          >LinkedIn</a
        >
      </li>
      <li>
        <a href="#x">Twitter</a>
      </li>
    </div>
  </div>`,
  styleUrl: './about.component.css',
})
export class AboutComponent {}
