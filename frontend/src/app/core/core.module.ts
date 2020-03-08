import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { JwtHelperService } from "@auth0/angular-jwt";
import { MenuModule } from "primeng/menu";
import { SegurancaModule } from "../seguranca/seguranca.module";
import { MenuComponent } from "./components/menu/menu.component";
import { NavbarComponent } from "./components/navbar/navbar.component";

@NgModule({
  declarations: [NavbarComponent, MenuComponent],
  imports: [CommonModule, MenuModule, SegurancaModule],
  exports: [NavbarComponent, SegurancaModule],
  providers: [JwtHelperService]
})
export class CoreModule {}
