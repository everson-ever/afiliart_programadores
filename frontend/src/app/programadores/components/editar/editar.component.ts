import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ErrorHandlerService } from 'src/app/core/services/error-handler.service';
import { Habilidade } from '../../models/Habilidade';
import { Programador } from '../../models/Programador';
import { ProgramadoresService } from '../../services/programadores.service';

@Component({
	selector: 'app-editar',
	templateUrl: './editar.component.html',
	styleUrls: [ './editar.component.css' ]
})
export class EditarComponent implements OnInit {
	constructor(
		private route: ActivatedRoute,
		private router: Router,
		private programadoresService: ProgramadoresService,
		private errorHandler: ErrorHandlerService
	) {}

	public id: number;
	public programador: Programador = new Programador();
	public habilidades: Habilidade = new Habilidade();

	ngOnInit(): void {
		this.route.params.subscribe(({ id }) => {
			this.id = id;
		});

		this.show(this.id);
	}

	public show(id: number) {
		this.programadoresService
			.show(id)
			.then((response) => {
				this.programador = response.data;
				this.habilidades = this.programador.habilidades;
			})
			.catch((err) => {
				this.router.navigate([ '/programadores' ]);
				this.errorHandler.handler(err);
			});
	}

	public editar() {
		this.programador.habilidades = this.habilidades;

		this.programadoresService.update(this.programador).then((data) => {
			this.router.navigate([ '/programadores' ]);
			this.errorHandler.handlerSuccess(data);
		});
	}
}
