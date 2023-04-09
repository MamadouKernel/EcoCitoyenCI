import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { Collecte } from 'src/app/models/collecte';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CollecteService {

  private urlServeurApi = environment.urlServiceApi;

  constructor(private http:HttpClient) {}

  public getCollectes():Observable<Collecte[]>{
    return this.http.get<Collecte[]>(this.urlServeurApi+"/collectes/showAll");
  }

  createCollecte(collecte: any): Observable<any> {
    return this.http.post(this.urlServeurApi + "/collectes/create", collecte).pipe(
      catchError(error => {
        if (error.status === 409) {
          return throwError('Le collecte existe déjà.');
        } else {
          return throwError('Une erreur est survenue.');
        }
      })
    );
  }
  
  
  

  public UpdateCollecte(role: Collecte){
    return this.http.put(this.urlServeurApi+"/collectes/update/",role,{headers : this.httpHeader()});
  }
  
  public getfirstCollecte(id: number){
    return this.http.get(this.urlServeurApi+"/collectes/show/"+id,{headers : this.httpHeader()});
  }
  
  
  public deletfirstCollecte(id: number){
    return this.http.delete(this.urlServeurApi+"/collectes/delete/"+id);
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
