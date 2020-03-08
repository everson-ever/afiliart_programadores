import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import {
  JwtHelperService,
  JwtModule,
  JwtModuleOptions
} from "@auth0/angular-jwt";
import { ToastrModule, ToastrService } from "ngx-toastr";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { CoreModule } from "./core/core.module";
import { HomeComponent } from './components/home/home.component';

const JWT_Module_Options: JwtModuleOptions = {
  config: {
    tokenGetter: () => localStorage.getItem("token")
  }
};

@NgModule({
  declarations: [AppComponent, HomeComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CoreModule,
    FormsModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    JwtModule.forRoot(JWT_Module_Options)
  ],
  providers: [ToastrService, JwtHelperService],
  bootstrap: [AppComponent]
})
export class AppModule {}
