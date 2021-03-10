import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { ReactiveFormsModule } from "@angular/forms";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { LoginComponent } from "./login/login.component";
import { StoreModule } from "@ngrx/store";
import { NgrxFormsModule } from "ngrx-forms";

import { reducers } from "./login/login.reducer";
@NgModule({
  imports: [BrowserModule, FormsModule, ReactiveFormsModule],
  declarations: [
    AppComponent,
    HelloComponent,
    LoginComponent,
    NgrxFormsModule,
    StoreModule.forRoot(reducers)
  ],
  providers: [],
  bootstrap: [LoginComponent]
})
export class AppModule {}
