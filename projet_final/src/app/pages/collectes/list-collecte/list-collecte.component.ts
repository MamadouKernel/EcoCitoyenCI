import { HttpErrorResponse } from '@angular/common/http';
import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Collecte } from 'src/app/models/collecte';
import { CollecteService } from 'src/app/services/collecte/collecte.service';

@Component({
  selector: 'app-list-collecte',
  templateUrl: './list-collecte.component.html',
  styleUrls: ['./list-collecte.component.less']
})
export class ListCollecteComponent implements OnInit {


  collectes:any = [];

  constructor(private collectesService:CollecteService, private router:Router){}

  getCollecte() {
    this.collectesService.getCollectes().subscribe(
      (data: Collecte[]) => {
        console.log(data);
        this.collectes = data;
      }, (error: HttpErrorResponse) => {
        console.log(error.message);
      }
    );
  }

  printPage(){
    window.print();
  }

  ngOnInit(): void { this.getCollecte(); }

  deleteOneCollecte(id: number) {

    this.collectesService.deletfirstCollecte(id).subscribe(data => {
      console.log(data);
      this.getCollecte();
    });

  }

  

  modifierCollecte(id: number) {

    //this.router.navigate(['/listCollecte', id]);
  }


  getfirstCollecte(id: number) {
    this.router.navigate(['/', id]);

  }

}
