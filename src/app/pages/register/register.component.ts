import { Router } from '@angular/router';
import { AuthService } from './../../services/auth.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  registerForm!: FormGroup;
  
  constructor(private formBuilder: FormBuilder, private authService: AuthService,private router:Router){}

  ngOnInit():void{
    this.registerForm = this.formBuilder.group({
      email:[''],
      password:['']
    })
  }
  public onSubmit(){
    this.authService.register(this.registerForm.value).subscribe(data =>{
      this.router.navigate(['/login'])
      console.log(data);
      
    })
  }
}
