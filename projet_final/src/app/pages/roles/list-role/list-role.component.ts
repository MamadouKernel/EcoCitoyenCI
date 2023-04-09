import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Role } from 'src/app/models/role';
import { RoleService } from 'src/app/services/role/role.service';

@Component({
  selector: 'app-list-role',
  templateUrl: './list-role.component.html',
  styleUrls: ['./list-role.component.less']
})
export class ListRoleComponent implements OnInit {

  roles: any = [];

  constructor(private RoleApi: RoleService, private router: Router) { }

  getRole() {
    this.RoleApi.getRoles().subscribe(
      (data: Role[]) => {
        console.log(data);
        this.roles = data;
      }, (error: HttpErrorResponse) => {
        console.log(error.message);
      }
    );
  }

  printPage(){
    window.print();
  }

  ngOnInit(): void { this.getRole(); }

  deleteOneRole(id: number) {

    this.RoleApi.deletfirstRole(id).subscribe(data => {

      console.log(data);
      this.getRole();
    });

  }


  modifierRole(id: number) {

    this.router.navigate(['/listRole', id]);
  }


  getfirstRole(id: number) {
    this.router.navigate(['/', id]);

  }


}
