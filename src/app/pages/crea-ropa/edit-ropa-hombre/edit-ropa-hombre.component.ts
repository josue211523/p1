import { RopasService } from 'src/app/services/ropas.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component } from '@angular/core';

@Component({
  selector: 'app-edit-ropa-hombre',
  templateUrl: './edit-ropa-hombre.component.html',
  styleUrls: ['./edit-ropa-hombre.component.scss']
})
export class EditRopaHombreComponent {
  ropaFormHombre!: FormGroup ;

  updateRopaHombre!:any;

  id: any;
  constructor(private activateRoute: ActivatedRoute, private ropaService: RopasService, private formBuilder: FormBuilder, private router:Router){}

  ngOnInit(): void {
    this.activateRoute.paramMap.subscribe((params) =>{
      this.id = params.get('id');
      this.ropaService.getRopaHombre(this.id).subscribe((data) =>{
        this.updateRopaHombre = data;
        console.log(this.id);
        
        console.log(data);
        
        this.ropaFormHombre = this.formBuilder.group({
          imagen:[this.updateRopaHombre.imagen,[Validators.required]],
          tipo: [this.updateRopaHombre.tipo,[Validators.required]],
          precio:[this.updateRopaHombre.precio,[Validators.required]]
        })
        this.ropaFormHombre?.valueChanges.subscribe((changes)=>{
          this.updateRopaHombre = changes;
        })
      });

    })
    
   
  }
  
  onSubmit(){
    
    // const formDataHombre = new FormData();
    // formDataHombre.append('imagen', this.ropaFormHombre.get('imagen')?.value);
    // formDataHombre.append('tipo', this.ropaFormHombre.get('tipo')?.value);
    // formDataHombre.append('precio', this.ropaFormHombre.get('precio')?.value);
    
    this.ropaService.updateRopaHombre(this.id, this.updateRopaHombre).subscribe(()=>this.router.navigate(['/ropahombre']))
    
  }
}
