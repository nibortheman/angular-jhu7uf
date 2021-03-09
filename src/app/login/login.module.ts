import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { NgrxFormsModule } from "ngrx-forms";
import { LoginComponent } from "./login.component";
import { AsyncValidationEffects } from "./login.effects";
import { reducer } from "./login.reducer";

@NgModule({
  imports: [
    CommonModule,
    NgrxFormsModule,
    RouterModule.forChild([{ path: "", component: LoginComponent }]),
    StoreModule.forFeature("asyncValidation", reducer),
    EffectsModule.forFeature([AsyncValidationEffects])
  ],
  declarations: [LoginComponent]
})
export class AsyncValidationModule {}
