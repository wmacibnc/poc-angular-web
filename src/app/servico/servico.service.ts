import { Injectable } from  '@angular/core';
import { HttpClient} from  '@angular/common/http';

@Injectable({
	providedIn:  'root'
})

export  class  ServicoService {
	
	API_URL  =  'http://localhost:9093/poc-exemplo/conta/';
	API_URL2  =  'http://localhost:9093/poc-exemplo/servico/';
	constructor(private  httpClient:  HttpClient) {}

	obterNumeroConta(){
		return  this.httpClient.get(`${this.API_URL}obter-numero-conta`);
	}

	obter(){
		return  this.httpClient.get(`${this.API_URL2}obter`);
	}

	novaTransacao(transacao){
		return  this.httpClient.post(`${this.API_URL2}nova-transacao`, transacao);
	}

}