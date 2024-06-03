import { Component } from '@angular/core';
import { SignUpComponent } from '../sign-up/sign-up.component';
import { UserProfileComponent } from '../user-profile/user-profile.component';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html'
  ,
  imports: [RouterLink,RouterOutlet,SignUpComponent,UserProfileComponent],
  standalone: true,
  styles: [`
  
   
 
  `]
})
export class MenuComponent {}
