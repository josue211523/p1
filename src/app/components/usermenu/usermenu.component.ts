import { AuthService } from './../../services/auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-usermenu',
  templateUrl: './usermenu.component.html',
  styleUrls: ['./usermenu.component.scss']
})
export class UsermenuComponent {

  // logged: boolean = false;

  constructor (public authService:AuthService){}

  ngOnInit(): void {
    // this.logged = this.authService.logged();
  }


  logout(){
    this.authService.logout();
  }
}
