import { Injectable } from  '@angular/core';
import { HttpClient} from  '@angular/common/http';

@Injectable({
	providedIn:  'root'
})

export  class  ContaService {
	
	API_URL  =  'http://localhost:9093/poc-exemplo/conta/';
	constructor(private  httpClient:  HttpClient) {}

	novoCadastro(conta){
		return  this.httpClient.post(`${this.API_URL}novo-cadastro`, conta);
	}

	atualizarNumeroConta(numeroConta){
		return  this.httpClient.put(`${this.API_URL}atualizar/`+ numeroConta,null);
	}

}