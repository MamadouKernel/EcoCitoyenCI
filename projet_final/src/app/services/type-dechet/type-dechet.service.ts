import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { TypeDechet } from 'src/app/models/type-dechet';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TypeDechetService {
  private urlServeurApi = environment.urlServiceApi;

  constructor(private http:HttpClient) { }

  public getTypeDechet():Observable<TypeDechet[]>{
    return this.http.get<TypeDechet[]>(this.urlServeurApi+"/typedechet/showAll");
  }

  createTypeDechet(typeDechet: any): Observable<any> {
      return this.http.post(this.urlServeurApi+"/typedechet/create",typeDechet).pipe(
        catchError(error => {
          if (error.status === 409) {
            return throwError('Le type dechet existe déjà.');
          } else {
            return throwError('Une erreur est survenue.');
          }
        })
      )
  }

  public UpdateTypeDechet(typeDechet: TypeDechet){
    return this.http.put(this.urlServeurApi+"/typedechet/update/",typeDechet,{headers : this.httpHeader()});
  }

  public getfirstTypeDechet(id: number){
    return this.http.get(this.urlServeurApi+"/typedechet/show/"+id,{headers : this.httpHeader()});
  }

  public deletfirstTypeDechet(id: number){
    return this.http.delete(this.urlServeurApi+"/typedechet/delete/"+id);
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
