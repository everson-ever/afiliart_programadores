import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ButtonModule } from "primeng/button";
import { DialogModule } from "primeng/dialog";
import { ListaProgramadoresComponent } from "./components/lista-programadores/lista-programadores.component";
import { ProgramadoresRoutingModule } from "./programadores-routing-module";

@NgModule({
  declarations: [ListaProgramadoresComponent],
  imports: [
    CommonModule,
    ProgramadoresRoutingModule,
    ButtonModule,
    DialogModule
  ]
})
export class ProgramadoresModule {}
