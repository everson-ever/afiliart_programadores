import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiService } from 'src/app/core/services/api.service';
import { Programador } from '../models/Programador';

@Injectable({
	providedIn: 'root'
})
export class ProgramadoresService {
	constructor(private http: HttpClient, private apiService: ApiService) {}

	public index(): Promise<any> {
		return this.http
			.get(`${this.apiService.url}/programadores`)
			.toPromise()
			.then((response) => {
				return Promise.resolve(response);
			})
			.catch((err) => {
				return Promise.reject(err);
			});
	}

	public show(id: number): Promise<any> {
		return this.http
			.get(`${this.apiService.url}/programadores/${id}`)
			.toPromise()
			.then((response) => {
				return Promise.resolve(response);
			})
			.catch((err) => {
				if (err.status === 404) {
					return Promise.reject('Recurso não encontrado');
				}
				return Promise.reject(err);
			});
	}

	public destroy(id: number): Promise<any> {
		return this.http
			.delete(`${this.apiService.url}/programadores/${id}`)
			.toPromise()
			.then((response) => {
				console.log(response);
				return Promise.resolve(response);
			})
			.catch((err) => {
				if (err.status === 400) {
					return Promise.reject('Não foi possível deletar');
				}
				if (err.status === 404) {
					return Promise.reject('Recurso já não existe na base de dados');
				}
			});
	}

	public store(programador: Programador): Promise<any> {
		return this.http
			.post(`${this.apiService.url}/programadores`, programador)
			.toPromise()
			.then((response) => {
				return Promise.resolve(response);
			})
			.catch((err) => {
				return Promise.reject(err);
			});
	}

	public update(programador: Programador): Promise<any> {
		return this.http
			.put(`${this.apiService.url}/programadores/${programador._id}`, programador)
			.toPromise()
			.then(() => {
				return Promise.resolve('Programador editado');
			})
			.catch((err) => {
				return Promise.reject(err);
			});
	}
}
