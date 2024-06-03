import { Component } from '@angular/core';
import { TuiRootModule, TuiButtonModule } from '@taiga-ui/core';
@Component({
  selector: 'app-home',
  standalone: true,
  template: `
  <tui-root>
    <button tuiButton>Hello Taiga UI</button>
  </tui-root>
`,
  imports: [TuiRootModule, TuiButtonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
