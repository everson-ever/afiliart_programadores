import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class ProgramadoresService {
	constructor(private http: HttpClient) {}

	public getProgramadores(): Promise<any> {
		return this.http
			.get('http://localhost:3000/api/programadores')
			.toPromise()
			.then((response) => {
				return Promise.resolve(response);
			})
			.catch((err) => {
				return Promise.reject(err);
			});
	}
}
