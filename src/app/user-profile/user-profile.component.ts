import { Component } from '@angular/core';
import { TuiRootModule, TuiButtonModule } from '@taiga-ui/core';
@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [TuiRootModule, TuiButtonModule],
  templateUrl: './user-profile.component.html',
  template: `
  <tui-root>
    <button tuiButton>Hello Taiga UI</button>
  </tui-root>
`,
  
  styleUrl: './user-profile.component.css'
})
export class UserProfileComponent {

}
