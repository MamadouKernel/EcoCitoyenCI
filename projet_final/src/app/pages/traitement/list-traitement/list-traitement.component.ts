import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Traitement } from 'src/app/models/traitement';
import { TraitementService } from 'src/app/services/traitement/traitement.service';

@Component({
  selector: 'app-list-traitement',
  templateUrl: './list-traitement.component.html',
  styleUrls: ['./list-traitement.component.less']
})
export class ListTraitementComponent implements OnInit {
  traitements:any = [];

  constructor(private traitementService:TraitementService){}

  getTaitements(){
    this.traitementService.getTraitements().subscribe(
      (data: Traitement[]) => {
        console.log(data);
        this.traitements = data;
      },(error:HttpErrorResponse)=>{
        console.log(error.message);
      });

  }

  printPage(){
    window.print();
  }

  ngOnInit(){ this.getTaitements()}


  deleteOneTraitement(id: number) {

    this.traitementService.deletfirstTraitement(id).subscribe(data => {
      console.log(data);
      this.getTaitements();
    });

  }

  modifierTraitement(id: number) {

    //this.router.navigate(['/listCollecte', id]);
  }

}
