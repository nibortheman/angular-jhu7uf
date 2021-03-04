import { Component } from "@angular/core";
import { UserData } from "./userdata";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent {
  userModel = new UserData();
}
