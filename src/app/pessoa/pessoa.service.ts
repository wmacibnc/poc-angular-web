import { Injectable } from  '@angular/core';
import { HttpClient} from  '@angular/common/http';

@Injectable({
	providedIn:  'root'
})

export  class  PessoaService {
	
	API_URL  =  'http://localhost:9093/poc-exemplo/conta/';
	constructor(private  httpClient:  HttpClient) {}

	atualizarNumeroConta(numeroConta){
		return  this.httpClient.put(`${this.API_URL}atualizar/`+ numeroConta,null);
	}

	obterNomeConta(){
		return  this.httpClient.get(`${this.API_URL}obter-nome-conta`);
	}

}