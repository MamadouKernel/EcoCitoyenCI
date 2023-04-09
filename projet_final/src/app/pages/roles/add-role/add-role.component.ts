import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RoleService } from  '../../../services/role/role.service';

@Component({
  selector: 'app-add-role',
  templateUrl: './add-role.component.html',
  styleUrls: ['./add-role.component.less']
})
export class AddRoleComponent {

  roleform!: FormGroup;
  message!: string; // message de validation

  constructor(private fb: FormBuilder, private roleService: RoleService, private router: Router) {
    this.roleform = this.fb.group({
      libelle: [``, Validators.required]
    });
  }

  submitForm(): void {
    if (this.roleform.valid) {
      // Envoi de la requête HTTP pour créer un nouveau rôle
      this.roleService.createRole(this.roleform.value).subscribe(data => {
        console.log(data);
        this.message = 'Le rôle a été créé avec succès.'; // message de succès
        this.roleform.reset(); // réinitialisation du formulaire
      }, error => {
        console.log(error);
        this.message = 'Erreur lors de la création du rôle. Veuillez réessayer.'; // message d'erreur
      });
    } else {
      // Marquage de tous les champs invalides comme "dirty" pour afficher les erreurs de validation
      Object.values(this.roleform.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }

  ngOnInit(): void {}

}
