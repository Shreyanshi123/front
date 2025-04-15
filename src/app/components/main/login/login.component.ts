import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
   
 constructor(private router:Router){};

 loginControl(): void {
  // Add logic to validate user credentials here

  // Navigate to the dashboard
  this.router.navigate(['/dashboard/dashboard']);
}

}
