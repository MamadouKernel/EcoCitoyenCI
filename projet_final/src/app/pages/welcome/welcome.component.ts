import { HttpErrorResponse } from "@angular/common/http";
import {Component, OnInit} from "@angular/core";
import { Collecte } from "src/app/models/collecte";
import { Dechet } from "src/app/models/dechets";
import { Traitement } from "src/app/models/traitement";
import { CollecteService } from "src/app/services/collecte/collecte.service";
import { DechetService } from "src/app/services/dechet/dechet.service";
import { TraitementService } from "src/app/services/traitement/traitement.service";

@Component({
  selector: "app-welcome",
  templateUrl: "./welcome.component.html",
  styleUrls: ["./welcome.component.less"],
})
export class WelcomeComponent implements OnInit {
  
  dechets:any = [];
  nbDechets = 0;
  collectes:any = [];
  nbCollectes = 0;
  traitements:any = [];
  nbTraitements = 0;
  searchValue: string = "";

  constructor(
    private dechetService:DechetService, 
    private collecteService:CollecteService, 
    private traitementService:TraitementService) {}

  getDechets(){
    this.dechetService.getDechets().subscribe(
      (data:Dechet[]) => {
        this.dechets = data;
        this.nbDechets = this.dechets.length;
        console.log(this.nbDechets);
      },(error: HttpErrorResponse)=>{
        console.log(error.message);
      }
    );
  }

  printPage(){
    window.print();
  }
  
  getTaitements(){
    this.traitementService.getTraitements().subscribe(
      (data: Traitement[]) => {
        this.traitements = data;
        this.nbTraitements = this.traitements.length;
      },(error:HttpErrorResponse)=>{
        console.log(error.message);
      });

  }


  getCollectes(){
    this.collecteService.getCollectes().subscribe(
      (data:Collecte[]) =>{
        this.collectes = data;
        this.nbCollectes = this.collectes.length;
        console.log(this.nbCollectes);
      },(error: HttpErrorResponse)=>{
        console.log(error.message);
      }
    )
  }


  ngOnInit(): void {
    this.getTaitements();
    this.getCollectes();
    this.getDechets();
  }


}
