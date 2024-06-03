

import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { MenuComponent } from "./menu/menu.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,RouterLink, MenuComponent],

  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  styles: [`
  .content {
    padding: 1rem;
  }
`],
})
export class AppComponent {
  title = 'angular-starter';
}
