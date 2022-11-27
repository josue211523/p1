import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RopasService } from './../../../services/ropas.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-ropa-mujer',
  templateUrl: './edit-ropa-mujer.component.html',
  styleUrls: ['./edit-ropa-mujer.component.scss']
})
export class EditRopaMujerComponent implements OnInit{

  ropaFormMujer!: FormGroup;

  updateRopaMujer!:any;

  id: any;
  constructor(private activateRoute: ActivatedRoute, private ropaService: RopasService, private formBuilder: FormBuilder, private router:Router){}

  ngOnInit(): void {
    this.activateRoute.paramMap.subscribe((params) =>{
      this.id = params.get('id');
      this.ropaService.getRopaMujer(this.id).subscribe((data) =>{
        this.updateRopaMujer = data;
        console.log(data);
        
        this.ropaFormMujer = this.formBuilder.group({
          imagen:[this.updateRopaMujer.imagen,[Validators.required]],
          tipo: [this.updateRopaMujer.tipo,[Validators.required]],
          precio:[this.updateRopaMujer.precio,[Validators.required]]
        })
        this.ropaFormMujer.valueChanges.subscribe((changes)=>{
          console.log('change', changes);
          
          this.updateRopaMujer = changes;
        })
      });

    })
    
    
  }
  
  onSubmit(){
    
    // const formDataMujer = new FormData();
    // formDataMujer.append('imagen', this.ropaFormMujer.get('imagen')?.value);
    // formDataMujer.append('tipo', this.ropaFormMujer.get('tipo')?.value);
    // formDataMujer.append('precio', this.ropaFormMujer.get('precio')?.value);
    this.ropaService.updateRopaMujer(this.id, this.updateRopaMujer).subscribe(()=>this.router.navigate(['/ropamujer']))
    
  }
}
