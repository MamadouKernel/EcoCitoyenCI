import {Component, OnInit} from "@angular/core";
import {UntypedFormBuilder, UntypedFormControl, UntypedFormGroup} from "@angular/forms";
import {Router} from "@angular/router";
import {routeMapping} from "../../../utils/routeMapping";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.less"],
})
export class LoginComponent implements OnInit {
  form!: UntypedFormGroup;
  eemail = 'kernel0748@gmail.com';
  passwor = '01234';

  constructor(private fb: UntypedFormBuilder, private router: Router) {
    this.form = this.fb.group({
      profile: new UntypedFormControl(null, []),
      username: new UntypedFormControl(null, []),
      password: new UntypedFormControl(null, []),
      remember: new UntypedFormControl(true, []),
    });
  }

  submitForm(): void {
    if (this.form.valid) {
      if(this.form.get('username')?.value === this.eemail && this.form.get('password')?.value === this.passwor){
      console.log("submit", this.form.value);
      this.router.navigate([routeMapping.home]);
      }else{
        alert('Email or password is incorrect');
      }
    } else {
      Object.values(this.form.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({onlySelf: true});
        }
      });
    }
  }

  ngOnInit(): void {

  }
}
