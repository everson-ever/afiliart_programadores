import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarProgramadorComponent } from './components/cadastrar-programador/cadastrar-programador.component';
import { ListaProgramadoresComponent } from './components/lista-programadores/lista-programadores.component';

const routes: Routes = [
	{ path: 'programadores', component: ListaProgramadoresComponent },
	{ path: 'programadores/cadastrar', component: CadastrarProgramadorComponent }
];

@NgModule({
	imports: [ RouterModule.forChild(routes) ],
	exports: [ RouterModule ]
})
export class ProgramadoresRoutingModule {}
