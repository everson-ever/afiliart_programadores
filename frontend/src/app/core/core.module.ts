import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MenuModule } from "primeng/menu";
import { SegurancaModule } from "../seguranca/seguranca.module";
import { MenuComponent } from "./components/menu/menu.component";
import { NavbarComponent } from "./components/navbar/navbar.component";

@NgModule({
  declarations: [NavbarComponent, MenuComponent],
  imports: [CommonModule, MenuModule, SegurancaModule],
  exports: [NavbarComponent, SegurancaModule]
})
export class CoreModule {}
