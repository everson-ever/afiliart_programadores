import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { LoginComponent } from './components/login/login.component';
import { SegurancaRoutingModule } from './seguranca-routing-module';
import { TokenInterceptor } from './token.interceptor';

@NgModule({
	declarations: [ LoginComponent ],
	imports: [ CommonModule, SegurancaRoutingModule, ButtonModule, InputTextModule, FormsModule ],
	exports: [ LoginComponent ],
	providers: [ TokenInterceptor ]
})
export class SegurancaModule {}
