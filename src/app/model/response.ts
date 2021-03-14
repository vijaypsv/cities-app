import { City } from './/city';

export class Response {

	content: City[];
	totalPages: number;
    totalElements: number;

    constructor() { 
   		this.content = [];
		this.totalPages = 0;
		this.totalElements = 0;
	}
}
