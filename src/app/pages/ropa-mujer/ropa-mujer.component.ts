import { RopasService } from 'src/app/services/ropas.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ropa-mujer',
  templateUrl: './ropa-mujer.component.html',
  styleUrls: ['./ropa-mujer.component.scss']
})
export class RopaMujerComponent {
  ropaMujer?: any[];

  constructor(private ropaMujerService:RopasService ){

    this.ropaMujerService.getAllRopaMujer().subscribe((data:any) =>{
      console.log(data)
      this.ropaMujer = [...data]
    })

  }
}
