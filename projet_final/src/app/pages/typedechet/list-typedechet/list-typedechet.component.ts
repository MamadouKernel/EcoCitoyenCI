import { HttpErrorResponse } from '@angular/common/http';
import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TypeDechet } from 'src/app/models/type-dechet';
import { TypeDechetService } from 'src/app/services/type-dechet/type-dechet.service';

@Component({
  selector: 'app-list-typedechet',
  templateUrl: './list-typedechet.component.html',
  styleUrls: ['./list-typedechet.component.less']
})
export class ListTypedechetComponent implements OnInit {

  typeDechets:any = [];
  
  constructor(private typedechetApi: TypeDechetService, private router: Router){}
  
  
  getTypeDechet() {
    this.typedechetApi.getTypeDechet().subscribe(
      (data: TypeDechet[]) => {
        console.log(data);
        this.typeDechets = data;
      }, (error: HttpErrorResponse) => {
        console.log(error.message);
      }
    );
  }

  ngOnInit(): void { this.getTypeDechet(); }

  deleteOneRole(id: number) {

    this.typedechetApi.deletfirstTypeDechet(id).subscribe(data => {

      console.log(data);
      this.getTypeDechet();
    });

  }

  printPage(){
    window.print();
  }

  modifierTypeDechet(id: number) {

    this.router.navigate(['/listRole', id]);
  }


  getfirstTypeDechet(id: number) {
    this.router.navigate(['/', id]);
  }

}
