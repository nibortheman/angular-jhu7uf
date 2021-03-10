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
          Validators.pattern("[a-z0-9]{6,20}")
        ])
      },
      { updateOn: "submit" }
    );
  }

  get mainlogin() {
    return this.formGroup.get("mainlogin");
  }
}
