import { RopasService } from './../../services/ropas.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ropa-hombre',
  templateUrl: './ropa-hombre.component.html',
  styleUrls: ['./ropa-hombre.component.scss']
})
export class RopaHombreComponent {

  ropaHombre?: any[];

  constructor(private ropaHombreService:RopasService ){

    this.ropaHombreService.getAllRopaHombre().subscribe((data:any) =>{
      console.log(data)
      this.ropaHombre = [...data]
    })

  }


}
