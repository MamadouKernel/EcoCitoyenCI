import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TypeDechet } from 'src/app/models/type-dechet';
import { DechetService } from 'src/app/services/dechet/dechet.service';
import { TypeDechetService } from 'src/app/services/type-dechet/type-dechet.service';

@Component({
  selector: 'app-add-dechet',
  templateUrl: './add-dechet.component.html',
  styleUrls: ['./add-dechet.component.less']
})
export class AddDechetComponent implements OnInit {
  dechetForm: FormGroup;
  typeDechets: TypeDechet[] = [];
  message!: string;
  files = [];
  confirm : boolean = false;
  fileUrl : string = "";

  constructor(
    private fb: FormBuilder,
    private dechetService: DechetService,
    private typedechetService: TypeDechetService
  ) {
    this.dechetForm = this.fb.group({
      // Définir les contrôles du formulaire ici
      libelle:[``,Validators.required],
      origine:[``,Validators.required],
      image:[``,Validators.required],
      typedechet:[``,Validators.required]
    });
  }

  ngOnInit(): void {
    this.getTypeDechet();
  }

  getTypeDechet() {
    this.typedechetService.getTypeDechet().subscribe(
      (data: TypeDechet[]) => {
        console.log(data);
        this.typeDechets = data;
      },
      (error: HttpErrorResponse) => {
        console.log(error.message);
      }
    );
  }





  submitForm() {
    if (this.dechetForm.valid) {
      this.dechetService.createDechet({...this.dechetForm.value,typeDechet:{id:Number.parseInt(this.dechetForm.value.typedechet)}}).subscribe(
        (data) => {
          console.log(this.dechetForm.value);
          console.log(data);
          this.message = 'Déchet enregistré avec succès.';
          this.dechetForm.reset();
        },
        (error) => {
          console.log(error);
          this.message =
            'Erreur lors de l\'enregistrement. Veuillez réessayer';
        }
      );
    } else {
      Object.values(this.dechetForm.controls).forEach((control) => {
        if (control instanceof FormGroup) {
          Object.values(control.controls).forEach((subControl) => {
            subControl.markAsDirty();
            subControl.updateValueAndValidity({ onlySelf: true });
          });
        } else {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }
}
