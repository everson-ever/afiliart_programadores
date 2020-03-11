import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ErrorHandlerService } from 'src/app/core/services/error-handler.service';
import { Programador } from '../../models/Programador';
import { ProgramadoresService } from '../../services/programadores.service';

@Component({
	selector: 'app-cadastrar-programador',
	templateUrl: './cadastrar-programador.component.html',
	styleUrls: [ './cadastrar-programador.component.css' ]
})
export class CadastrarProgramadorComponent implements OnInit {
	habilidades = {
		nodejs: 0,
		html: 0,
		css: 0,
		angular: 0,
		bancoDados: 0
	};
	public programador: Programador = new Programador();

	constructor(
		private programadoresService: ProgramadoresService,
		private router: Router,
		private errorHandler: ErrorHandlerService
	) {}

	cadastrar() {
		this.programador.habilidades = this.habilidades;

		this.programadoresService
			.store(this.programador)
			.then(() => {
				this.router.navigate([ '/programadores' ]);
			})
			.catch((err) => {
				this.errorHandler.handler(err);
			});
	}

	ngOnInit(): void {}
}
