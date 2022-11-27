import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RopasService {

  constructor(private http:HttpClient) { }


  public getAllRopaHombre(): Observable<any>{
    return this.http.get('https://back-tienda-ropa.vercel.app/ropahombre')
    
  }
  public getRopaHombre(id: string): Observable<any>{
    return this.http.get('https://back-tienda-ropa.vercel.app/ropahombre/' + id)
  }

  public getAllRopaMujer(): Observable<any>{
    return this.http.get('https://back-tienda-ropa.vercel.app/ropamujer')
    
  }
  public getRopaMujer(id: string): Observable<any>{
    return this.http.get('https://back-tienda-ropa.vercel.app/ropamujer/' + id)
  }
  public newRopaHombre(newRopaHombre:any){
    return this.http.post('https://back-tienda-ropa.vercel.app/ropahombre/create', newRopaHombre)
  }
  public newRopaMujer(newRopaMujer:any){
    return this.http.post('https://back-tienda-ropa.vercel.app/ropamujer/create', newRopaMujer)
  }
  public deleteRopaHombre(id: string){
    return this.http.delete('https://back-tienda-ropa.vercel.app/ropahombre/delete/'+ id)
  }
  public deleteRopaMujer(id: string){
    return this.http.delete('https://back-tienda-ropa.vercel.app/ropamujer/delete/' + id)
  }
  
  public updateRopaHombre(id: string, updateRopaHombre: any){
  //   let headers = new HttpHeaders();
  // headers = headers.set('Content-Type', 'application/json; charset=utf-8');
    return this.http.put('https://back-tienda-ropa.vercel.app/ropahombre/edit/' + id, updateRopaHombre)
  }
  public updateRopaMujer(id: string,updateRopaMujer: any){

    console.log('envio', updateRopaMujer);
    
    return this.http.put('https://back-tienda-ropa.vercel.app/ropamujer/edit/' + id, updateRopaMujer)
  }
}
