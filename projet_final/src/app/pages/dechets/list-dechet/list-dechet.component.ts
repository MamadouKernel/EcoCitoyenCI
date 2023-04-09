import { Component, OnInit } from '@angular/core';
import { DechetService } from 'src/app/services/dechet/dechet.service';
import {Router} from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { Dechet } from 'src/app/models/dechets';
import { TypeDechetService } from 'src/app/services/type-dechet/type-dechet.service';
import { TypeDechet } from 'src/app/models/type-dechet';

@Component({
  selector: 'app-list-dechet',
  templateUrl: './list-dechet.component.html',
  styleUrls: ['./list-dechet.component.less']
})
export class ListDechetComponent implements OnInit{

  dechets:any = [];

  constructor(private dechetService:DechetService, private typedechetService:TypeDechetService, private router:Router){}

  getDechets(){
    this.dechetService.getDechets().subscribe(
      (data: Dechet[]) => {
        console.log(data);
        this.dechets = data;
      },(error: HttpErrorResponse)=>{
        console.log(error.message);
      });
    }


  ngOnInit(): void { this.getDechets()}

  deleteOneDechet(id: number) {

    this.dechetService.deletfirstDechet(id).subscribe(data => {
      console.log(data);
      this.getDechets();
    });

  }

  printPage(){
    window.print();
  }

  modifierDechet(id: number) {

    //this.router.navigate(['/listCollecte', id]);
  }



}
