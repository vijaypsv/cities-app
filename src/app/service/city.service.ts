import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Response } from '../model/response';
import { Observable } from 'rxjs/Observable';

@Injectable({
  providedIn: 'root'
})
export class CityService {

	private apiUrl: string;


 	constructor(private http: HttpClient) {
	    this.apiUrl = 'http://localhost:8080/api/cities/';
	}

	public queryByPage(params: any): Observable<Response> {		
	    return this.http.get<Response>(`${this.apiUrl}/queryByPage`, { params });
	}

	public sequence(): Observable<Response> {		
	    return this.http.get<Response>(`${this.apiUrl}/algorithm`);
	}

}
