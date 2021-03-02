import { Component } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent {
  userPassword = new FormGroup({
    primaryPassword: new FormControl("", [
      Validators.required,
      Validators.pattern("(?=.*[a-z]).{6,20}")
    ])
  });

  get primPass() {
    return this.userPassword.get("primaryPassword");
  }

  get lgn() {
    return this.userPassword.get("login");
  }

  onSubmit() {
    if (this.userPassword.valid) {
      console.log("form submitted");
    } else {
      // validate all form fields
    }
  }
}
