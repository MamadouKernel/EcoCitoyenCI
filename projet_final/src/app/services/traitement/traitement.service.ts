import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { Traitement } from 'src/app/models/traitement';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TraitementService {

  private urlServeurApi = environment.urlServiceApi;

  constructor(private http:HttpClient) {}

  public getTraitements():Observable<Traitement[]>{
    return this.http.get<Traitement[]>(this.urlServeurApi+"/traitements/showAll")
  }

  createTraitement(traitement:any): Observable<any>{
    return this.http.post(this.urlServeurApi+"/traitements/create",traitement).pipe(
      catchError(error =>{
        if(error.status ===409){
          return throwError('ce traitement existe déjà');
        } else{
          return throwError('Une erreur est survenue');
        }
      })
    )
  }

  public UpdateTraitement(traitement:Traitement){
    return this.http.put(this.urlServeurApi+"/traitements/update",traitement,{headers: this.httpHeader()});
  }

  public getfirstTraitement(id: number){
    return this.http.get(this.urlServeurApi+"/traitements/show/"+id,{headers : this.httpHeader()});
  }
  
  
  public deletfirstTraitement(id: number){
    return this.http.delete(this.urlServeurApi+"/traitements/delete/"+id);
  }

  httpHeader() {
    return new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT,DELETE',
      'Accept': 'application/json',
    });
  }






}
