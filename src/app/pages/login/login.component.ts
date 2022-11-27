import { Router } from '@angular/router';
import { AuthService } from './../../services/auth.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm!: FormGroup;
  
  constructor(private formBuilder: FormBuilder, private authService: AuthService,private router:Router){}

  ngOnInit():void{
    this.loginForm = this.formBuilder.group({
      email:[''],
      password:['']
    })
  }
  public onSubmit(){
    this.authService.login(this.loginForm.value).subscribe((data :any) =>{
      localStorage.setItem('token', data?.token)
      this.router.navigate(['/'])
    })
  }

}
