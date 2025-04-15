import { Component, inject } from '@angular/core';
import { ReactiveFormsModule,FormControl,FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  authService = inject(AuthService);
  constructor(private router:Router){};
  formData:FormGroup= new FormGroup({
    emailId:new FormControl('',Validators.required),
      password:new FormControl('',[Validators.required]),
      firstName:new FormControl('',[Validators.required]),
      lastName:new FormControl('',[Validators.required]),
      phone:new FormControl('',[Validators.required]),
      age:new FormControl('',[Validators.required]),
  })

  RegisterControl(){
    let myFormData = this.formData.value;
    console.log(this.formData.value);
    this.authService.signUp(myFormData)
      .subscribe({
        next:(data:any)=>{
          console.log(data);
        },
        error:(err:any)=>{
          console.log(err);
        }
      })
    // this.router.navigateByUrl("/login")
  }
}
