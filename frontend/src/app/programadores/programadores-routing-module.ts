import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthguardGuard } from '../auth-guard.guard';
import { CadastrarProgramadorComponent } from './components/cadastrar-programador/cadastrar-programador.component';
import { ListaProgramadoresComponent } from './components/lista-programadores/lista-programadores.component';

const routes: Routes = [
	{ path: 'programadores', component: ListaProgramadoresComponent, canActivate: [ AuthguardGuard ] },
	{ path: 'programadores/cadastrar', component: CadastrarProgramadorComponent, canActivate: [ AuthguardGuard ] }
];

@NgModule({
	imports: [ RouterModule.forChild(routes) ],
	exports: [ RouterModule ]
})
export class ProgramadoresRoutingModule {}
