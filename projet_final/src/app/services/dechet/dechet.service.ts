import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Dechet } from 'src/app/models/dechets';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DechetService {
  
  private urlServeurApi = environment.urlServiceApi;

  constructor(private http:HttpClient) { }

  public getDechets():Observable<Dechet[]>{
    return this.http.get<Dechet[]>(this.urlServeurApi+"/dechets/showAll");
  }

  createDechet(dechet: any): Observable<any>{
    return this.http.post(this.urlServeurApi+"/dechets/create",dechet).pipe()
  }

  public UpdateDechet(dechet: Dechet){
    return this.http.put(this.urlServeurApi+"/dechets/update/",dechet,{headers : this.httpHeader()});
  }
  
  public getfirstDechet(id:number){
    return this.http.get(this.urlServeurApi+"/dechets/show/"+id,{headers : this.httpHeader()});
  }

  public deletfirstDechet(id:number){
    return this.http.delete(this.urlServeurApi+"/dechets/delete/"+id);
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
