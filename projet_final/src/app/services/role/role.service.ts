import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { Role } from '../../models/role';

@Injectable({
  providedIn: 'root'
})
export class RoleService {

  private urlServeurApi = environment.urlServiceApi;
  
  constructor(private http:HttpClient) { }

  public getRoles():Observable<Role[]>{
    return this.http.get<Role[]>(this.urlServeurApi+"/roles/showAll");
  }

  createRole(role: any): Observable<any> {
    return this.http.post(this.urlServeurApi + "/roles/create", role).pipe(
      catchError(error => {
        if (error.status === 409) {
          return throwError('Le role existe déjà.');
        } else {
          return throwError('Une erreur est survenue.');
        }
      })
    );
  }
  
  
  

  public UpdateRole(role: Role){
    return this.http.put(this.urlServeurApi+"/roles/update/",role,{headers : this.httpHeader()});
  }
  
  public getfirstRole(id: number){
    return this.http.get(this.urlServeurApi+"/roles/show/"+id,{headers : this.httpHeader()});
  }
  
  
  public deletfirstRole(id: number){
    return this.http.delete(this.urlServeurApi+"/roles/delete/"+id);
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
