import { Injectable } from "@angular/core";
import { ToastrService } from "ngx-toastr";

@Injectable({
  providedIn: "root"
})
export class ErrorHandlerService {
  constructor(private toastr: ToastrService) {}

  public handler(err: any) {
    if (typeof err === "string") {
      this.toastr.error(err);
    } else {
      this.toastr.error("Não foi possível processar sua solicitação");
    }
  }
}
