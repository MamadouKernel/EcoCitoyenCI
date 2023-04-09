import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Users } from '../../models/users';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  getUserService() {
    throw new Error('Method not implemented.');
  }
  private urlServeurApi = environment.urlServiceApi;

  constructor(private httpClient:HttpClient) { }

  public getUsers():Observable<Users[]>{
    return this.httpClient.get<Users[]>(this.urlServeurApi+"/utilisateurs/showAll");
  }

  createUsers(users: any): Observable<any> {
    return this.httpClient.post(this.urlServeurApi + "/utilisateurs/create", users).pipe(
      catchError(error => {
        if (error.status === 409) {
          return throwError('L\'utilisateur existe déjà.');
        } else {
          return throwError('Une erreur est survenue.');
        }
      })
    );
  }

  public UpdateUser(id: number,users: Users){
    return this.httpClient.put(this.urlServeurApi+"/utilisateurs/update/{id}", users);
  }
  
  public getfirstUser(id: number){
    return this.httpClient.get(this.urlServeurApi+"/utilisateurs/show/"+id,{headers : this.httpHeader()});
  }
  
  
  public deletfirstUser(id: number){
    return this.httpClient.delete(this.urlServeurApi+"/utilisateurs/delete/"+id);
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
