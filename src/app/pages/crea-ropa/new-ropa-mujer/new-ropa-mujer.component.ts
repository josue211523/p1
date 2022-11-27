import { Router } from '@angular/router';
import { RopasService } from 'src/app/services/ropas.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component } from '@angular/core';

@Component({
  selector: 'app-new-ropa-mujer',
  templateUrl: './new-ropa-mujer.component.html',
  styleUrls: ['./new-ropa-mujer.component.scss']
})
export class NewRopaMujerComponent {
  newRopaMujer: any = {
    imagen:'',
    tipo:'',
    precio: ''
  };

  ropaFormMujer!: FormGroup;
  
  constructor (private ropaService: RopasService, private formBuilder: FormBuilder, private router:Router){}

  ngOnInit(): void{
    this.ropaFormMujer = this.formBuilder.group({
      imagen:['',[Validators.required]],
      tipo: ['',[Validators.required]],
      precio:['',[Validators.required]]
    })

    this.ropaFormMujer.valueChanges.subscribe((changes)=>{
      this.newRopaMujer = changes;
    })
  
  }

  onSubmit(){
    
    const formDataMujer = new FormData();
    formDataMujer.append('imagen', this.ropaFormMujer.get('imagen')?.value);
    formDataMujer.append('tipo', this.ropaFormMujer.get('tipo')?.value);
    formDataMujer.append('precio', this.ropaFormMujer.get('precio')?.value);
    this.ropaService.newRopaMujer(formDataMujer).subscribe(()=>this.router.navigate(['/ropamujer']))
    
  }
}
