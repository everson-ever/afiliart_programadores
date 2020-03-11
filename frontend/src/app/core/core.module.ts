import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProgramadoresModule } from '../programadores/programadores.module';
import { SegurancaModule } from '../seguranca/seguranca.module';
import { MenuComponent } from './components/menu/menu.component';
import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
	declarations: [ NavbarComponent, MenuComponent ],
	imports: [ CommonModule, SegurancaModule, RouterModule ],
	exports: [ NavbarComponent, SegurancaModule, ProgramadoresModule ],
	providers: []
})
export class CoreModule {}
