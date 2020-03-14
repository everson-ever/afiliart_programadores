import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { SliderModule } from 'primeng/slider';
import { CadastrarProgramadorComponent } from './components/cadastrar-programador/cadastrar-programador.component';
import { ListaProgramadoresComponent } from './components/lista-programadores/lista-programadores.component';
import { ProgramadoresRoutingModule } from './programadores-routing-module';
import { EditarComponent } from './components/editar/editar.component';

@NgModule({
	declarations: [ ListaProgramadoresComponent, CadastrarProgramadorComponent, EditarComponent ],
	imports: [
		CommonModule,
		ProgramadoresRoutingModule,
		ButtonModule,
		DialogModule,
		InputTextModule,
		SliderModule,
		FormsModule
	]
})
export class ProgramadoresModule {}
