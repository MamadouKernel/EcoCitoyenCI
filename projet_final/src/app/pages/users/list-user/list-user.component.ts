import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Users } from 'src/app/models/users';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.less']
})
export class ListUserComponent implements OnInit {

routeMapping: any;
role:any= [];
id!:number;

modifierUser(id: number) {
  this.router.navigate(["/updateUser",id])
}

  users: any = [];

  constructor(private userApi:UserService, private router:Router) { }

  getUsers(){
    this.userApi.getUsers().subscribe(
      (data:Users[])=>{ console.log(data);
        this.users = data;
      },(error:HttpErrorResponse)=>{
        console.log(error.message);}
    );
  }

  ngOnInit(): void { this.getUsers(); }

  deleteOneUser(id:number){

    this.userApi.deletfirstUser(id).subscribe(data=>{

      console.log(data);
      this.getUsers();
    });

  }


  printPage(){
    window.print();
  }

}
