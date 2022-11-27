import { AuthUserGuard } from './guards/auth-user.guard';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { EditRopaHombreComponent } from './pages/crea-ropa/edit-ropa-hombre/edit-ropa-hombre.component';
import { EditRopaMujerComponent } from './pages/crea-ropa/edit-ropa-mujer/edit-ropa-mujer.component';
import { NewRopaMujerComponent } from './pages/crea-ropa/new-ropa-mujer/new-ropa-mujer.component';
import { CreaRopaComponent } from './pages/crea-ropa/crea-ropa.component';
import { NewRopaHombreComponent } from './pages/crea-ropa/new-ropa-hombre/new-ropa-hombre.component';
import { RopaMujerMoreComponent } from './pages/ropa-mujer/ropa-mujer-more/ropa-mujer-more.component';
import { RopaHombreMoreComponent } from './pages/ropa-hombre/ropa-hombre-more/ropa-hombre-more.component';
import { AccesoriosComponent } from './pages/accesorios/accesorios.component';
import { RopaMujerComponent } from './pages/ropa-mujer/ropa-mujer.component';
import { RopaHombreComponent } from './pages/ropa-hombre/ropa-hombre.component';
import { HomeComponent } from './pages/home/home.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ColleccionesComponent } from './pages/collecciones/collecciones.component';

const routes: Routes = [

  {path: '', component:HomeComponent},
  {path: 'ropahombre', component:RopaHombreComponent},
  {path: 'ropahombre/:id', component:RopaHombreMoreComponent},
  {path: 'crearopahombre', component:NewRopaHombreComponent, canActivate:[AuthUserGuard]},
  {path: 'updateropahombre/:id', component:EditRopaHombreComponent,canActivate:[AuthUserGuard]},
  {path: 'ropamujer', component:RopaMujerComponent},
  {path: 'ropamujer/:id', component:RopaMujerMoreComponent},
  {path: 'crearopamujer', component:NewRopaMujerComponent,canActivate:[AuthUserGuard]},
  {path: 'updateropamujer/:id', component:EditRopaMujerComponent,canActivate:[AuthUserGuard]},
  {path: 'accesorios', component:AccesoriosComponent},
  {path: 'crearopa', component:CreaRopaComponent,canActivate:[AuthUserGuard]},
  {path: 'colecciones', component:ColleccionesComponent},
  {path: 'register', component:RegisterComponent},
  {path: 'login', component:LoginComponent},
  // {path: 'logout', component:ColleccionesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
