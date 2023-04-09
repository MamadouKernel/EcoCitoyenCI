import { Component,OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { TypeDechetService } from 'src/app/services/type-dechet/type-dechet.service';

@Component({
  selector: 'app-add-typedechet',
  templateUrl: './add-typedechet.component.html',
  styleUrls: ['./add-typedechet.component.less']
})
export class AddTypedechetComponent implements OnInit {

  formTypedechet!: FormGroup;
  message!: string;

  constructor(private fb:FormBuilder,private typedechetService:TypeDechetService){
    this.formTypedechet = this.fb.group({
      libelle:[``,Validators.required],
      description:[``,Validators.required],
      couleur:[``,Validators.required]

    })
  }

  submitForm():void {
    if(this.formTypedechet.valid){
      this.typedechetService.createTypeDechet(this.formTypedechet.value).subscribe(data => {
        console.log(data);

        this.message = 'Le type de déchet a été créé avec succès.'; // message de succès
        this.formTypedechet.reset(); // réinitialisation du formulaire
      }, error => {
        console.log(error);
        this.message = 'Erreur lors de la création du type de déchet. Veuillez réessayer.'; // message d'erreur
      });
    }else {
      // Marquage de tous les champs invalides comme "dirty" pour afficher les erreurs de validation
      Object.values(this.formTypedechet.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }

  ngOnInit():void{}

}
