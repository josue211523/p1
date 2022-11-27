
import { Component } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RopasService } from 'src/app/services/ropas.service';
@Component({
  selector: 'app-new-ropa-hombre',
  templateUrl: './new-ropa-hombre.component.html',
  styleUrls: ['./new-ropa-hombre.component.scss']
})
export class NewRopaHombreComponent {

  newRopaHombre: any = {
    imagen:'',
    tipo:'',
    precio: ''
  };

  ropaFormHombre!: FormGroup;
  constructor (private ropaService: RopasService, private formBuilder: FormBuilder, private router:Router){}

  ngOnInit(): void{
    this.ropaFormHombre = this.formBuilder.group({
      imagen:['',[Validators.required]],
      tipo: ['',[Validators.required]],
      precio:['',[Validators.required]]
    })

    this.ropaFormHombre.valueChanges.subscribe((changes)=>{
      this.newRopaHombre = changes;
    })
  
  }

  onSubmit(){
    
    const formDataHombre = new FormData();
    formDataHombre.append('imagen', this.ropaFormHombre.get('imagen')?.value);
    formDataHombre.append('tipo', this.ropaFormHombre.get('tipo')?.value);
    formDataHombre.append('precio', this.ropaFormHombre.get('precio')?.value);
    this.ropaService.newRopaHombre(formDataHombre).subscribe(()=>this.router.navigate(['/ropahombre']))
    
  }

}
