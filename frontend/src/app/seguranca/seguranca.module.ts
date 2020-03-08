import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ButtonModule } from "primeng/button";
import { InputTextModule } from "primeng/inputtext";
import { LoginComponent } from "./components/login/login.component";
import { SegurancaRoutingModule } from "./seguranca-routing-module";

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    SegurancaRoutingModule,
    ButtonModule,
    InputTextModule
  ],
  exports: [LoginComponent]
})
export class SegurancaModule {}
