import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Dechet } from 'src/app/models/dechets';
import { DechetService } from 'src/app/services/dechet/dechet.service';
import { TraitementService } from 'src/app/services/traitement/traitement.service';

@Component({
  selector: 'app-add-traitement',
  templateUrl: './add-traitement.component.html',
  styleUrls: ['./add-traitement.component.less']
})
export class AddTraitementComponent implements OnInit {
  traitementForm!:FormGroup;
  message!: string;
  dechets: Dechet[] = [];

  constructor(
    private fb:FormBuilder, 
    private traitementService:TraitementService,
    private dechetService : DechetService
    ){
      this.traitementForm = this.fb.group({
        lieuTraitement:[``,Validators.required],
        statut:[``,Validators.required],
        quantite:[``,Validators.required],
        dechet:[``,Validators.required],

      })
    }

  submitForm(){
    if(this.traitementForm.valid){
      this.traitementService.createTraitement({...this.traitementForm.value,dechet:{id:Number.parseInt(this.traitementForm.value.dechet)}}).subscribe(
        (data)=>{
          console.log(this.traitementForm.value);
          console.log(data);
          this.message = 'Traitement enregistré avec succès';
          this.traitementForm.reset();
        },
        (error)=>{
          console.log(error);
          this.message= 'Erreur lors de l\'enregistrement. Veuillez réessayer';
        }
      );
    }else{
      Object.values(this.traitementForm.controls).forEach((control)=>{
        if(control instanceof FormGroup){
          Object.values(control.controls).forEach((subControl)=>{
            subControl.markAsDirty();
            subControl.updateValueAndValidity({ onlySelf: true });
          })
        }else {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }

  }
  ngOnInit(){this.getDechet()}

  getDechet(){
    this.dechetService.getDechets().subscribe(
      (data: Dechet[])=>{
        console.log(data);
        this.dechets = data;
      },(error: HttpErrorResponse)=>{
        console.log(error.message);
      }
    );
  }

}
