import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Dechet } from 'src/app/models/dechets';
import { CollecteService } from 'src/app/services/collecte/collecte.service';
import { DechetService } from 'src/app/services/dechet/dechet.service';

@Component({
  selector: 'app-add-collecte',
  templateUrl: './add-collecte.component.html',
  styleUrls: ['./add-collecte.component.less']
})
export class AddCollecteComponent {
  collecteForm!:FormGroup;
  message!: string;

  dechets: Dechet[] = [];

  constructor(
    private fb: FormBuilder, 
    private collecteService:CollecteService,
    private dechetService:DechetService
    ){
    this.collecteForm = this.fb.group({
      date:[``,Validators.required],
      quantite:[``,Validators.required],
      statut:[``,Validators.required],
      dechet:[``,Validators.required]
    });
  }

  ngOnInit(): void {
    this.getUser()
  }

  getUser(){
    this.dechetService.getDechets().subscribe(
      (data:Dechet[]) => {
        console.log(data);
        this.dechets = data;
      },
      (error: HttpErrorResponse) => {
        console.log(error.message);
      }
    )
  }


  submitFormc(): void {
    if (this.collecteForm.valid) {
      // Envoi de la requête HTTP pour créer un nouveau rôle
      this.collecteService.createCollecte({...this.collecteForm.value,dechet:{id:Number.parseInt(this.collecteForm.value.dechet)}}).subscribe(data => {
        console.log(data);
        this.message = 'Le rôle a été créé avec succès.'; // message de succès
        this.collecteForm.reset(); // réinitialisation du formulaire
      }, error => {
        console.log(error);
        this.message = 'Erreur lors de la création de la collecte. Veuillez réessayer.'; // message d'erreur
      });
    } else {
      // Marquage de tous les champs invalides comme "dirty" pour afficher les erreurs de validation
      Object.values(this.collecteForm.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }

  

}
