import { Component } from "@angular/core";
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
  AbstractControl
} from "@angular/forms";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  public formGroup: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.formGroup = this.fb.group(
      {
        mainlogin: new FormControl("", [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(20)
        ])
      },
      { updateOn: "submit" }
    ); // This makes sure it only updates the formControl values on 'blur'
    // If you need the formControl to update its value on every change then simply removing this altogether works
    //  as the default value for this is `change`
    // 'submit' also available
  }

  get password() {
    return this.formGroup.get("mainlogin");
  }
}
