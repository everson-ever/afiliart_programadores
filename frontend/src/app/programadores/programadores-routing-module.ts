import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ListaProgramadoresComponent } from "./components/lista-programadores/lista-programadores.component";

const routes: Routes = [
  { path: "programadores", component: ListaProgramadoresComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProgramadoresRoutingModule {}
