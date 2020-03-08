import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ListaProgramadoresComponent } from "./components/lista-programadores/lista-programadores.component";
import { ProgramadoresRoutingModule } from "./programadores-routing-module";

@NgModule({
  declarations: [ListaProgramadoresComponent],
  imports: [CommonModule, ProgramadoresRoutingModule]
})
export class ProgramadoresModule {}
