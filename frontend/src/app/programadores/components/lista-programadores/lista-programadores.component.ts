import { Component, OnInit } from "@angular/core";
import { ErrorHandlerService } from "src/app/core/services/error-handler.service";
import { AuthService } from "src/app/seguranca/services/auth.service";
import { Programador } from "../../models/Programador";
import { ProgramadoresService } from "../../services/programadores.service";

@Component({
  selector: "app-lista-programadores",
  templateUrl: "./lista-programadores.component.html",
  styleUrls: ["./lista-programadores.component.css"]
})
export class ListaProgramadoresComponent implements OnInit {
  public programadores: Programador[] = [];
  public display = false;
  public habilidade: any;

  constructor(
    private programadoresService: ProgramadoresService,
    private errorHandler: ErrorHandlerService,
    public authService: AuthService
  ) {}

  ngOnInit() {
    this.getProgramadores();
  }

  public showHability(programador) {
    this.habilidade = programador.habilidades;
    this.display = true;
  }

  public getProgramadores() {
    this.programadoresService
      .getProgramadores()
      .then(response => {
        this.programadores = response.data;
      })
      .catch(err => {
        this.errorHandler.handler(err);
      });
  }
}
