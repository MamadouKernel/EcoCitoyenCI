import { HttpErrorResponse } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, UntypedFormBuilder, UntypedFormControl, UntypedFormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { Role } from 'src/app/models/role';
import { RoleService } from "src/app/services/role/role.service";
import { UserService } from "src/app/services/user/user.service";

@Component({
  selector: "app-add-user",
  templateUrl: "./add-user.component.html",
  styleUrls: ["./add-user.component.less"],
})
export class AddUserComponent implements OnInit {
  form!: UntypedFormGroup;
  roles: Role[] = [];
  message!: string;

  constructor(
    private fb: UntypedFormBuilder,
    private userService: UserService,
    private router: Router,
    private roleService: RoleService
  ) { 
    this.form = this.fb.group({
      nom: new UntypedFormControl(``,[]),
      prenom: new UntypedFormControl(``,[]),
      username: new UntypedFormControl(``,[]),
      email: new UntypedFormControl(``,[]),
      password: new UntypedFormControl(``,[]),
      role_id: new UntypedFormControl(``,[])
    })
  }

  ngOnInit(): void {
    this.getRoles();
  }



  getRoles(): void {
    this.roleService.getRoles().subscribe(
      (data: Role[]) => {
        console.log(data);
        this.roles = data;
      },
      (error: HttpErrorResponse) => {
        console.log(error.message);
      }
    );
  }

   submitForm(): void {
    if (this.form.valid) {
      // Envoi de la requête HTTP pour créer un nouveau rôle
      this.userService.createUsers({...this.form.value,role:{id:Number.parseInt(this.form.value.role_id)}}).subscribe(data => {
        console.log(this.form.value);
        console.log(data);
        this.message = 'L\'utilisateur a été créée avec succès.'; // message de succès
        this.form.reset(); // réinitialisation du formulaire
      }, error => {
        console.log(error);
        this.message = 'Erreur lors de la création de l\'utilisateur. Veuillez réessayer.'; // message d'erreur
      });
    } else {
      // Marquage de tous les champs invalides comme "dirty" pour afficher les erreurs de validation
      Object.values(this.form.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  } 



}
