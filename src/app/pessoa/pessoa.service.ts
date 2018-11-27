import { Injectable } from  '@angular/core';
import { HttpClient} from  '@angular/common/http';

@Injectable({
	providedIn:  'root'
})

export  class  PessoaService {
	
	API_URL  =  'http://localhost:9093/zuul/poc-exemplo/exemplo/';
	constructor(private  httpClient:  HttpClient) {}
	todos(){
		return  this.httpClient.get(`${this.API_URL}teste`);

	}
}