import { Component, OnInit } from '@angular/core';
import { PessoaService } from  './pessoa.service';
import { FormsModule } from '@angular/forms'; 


@Component({
	selector: 'app-pessoa',
	templateUrl: './pessoa.component.html',
	styleUrls: ['./pessoa.component.css']
})
export class PessoaComponent implements OnInit {
	
	nomeText : any;
	servico1 : any;
	valor1: any;
	servicos : any;
	transacoes : any;
	saldo:number;
	
	constructor(private  apiService: PessoaService) {
		this.saldo = 1000;
	}
	
	ngOnInit() {
		// this.apiService.obter().subscribe((data:  Array<object>) => {
		// 	this.servicos = data;
		// });
		// this.apiService.obterNumeroConta().subscribe((data:  any) => {
		// 	if(data){
		// 		this.apiService.obterTransacoes(data).subscribe((data:  Array<object>) => {
		// 			this.transacoes = data;
		// 			for (let i in this.transacoes) {
		// 				this.saldo = this.saldo - this.transacoes[i].valor;
		// 			}
		
		// 		});
		// 	}
		// });
	}
	
	criarConta(){
		// let conta = {
		// 	pessoa:{
		// 		nome:this.nomeText
		// 	}
		// }
		
		// this.apiService.novoCadastro(conta).subscribe((data:  any) => {
		// 	this.apiService.atualizarNumeroConta(data.id).subscribe((data:  any) => {
		// 		alert("Conta Criada com sucesso! Anote o número da sua conta: 000" + data.id);
		// 	});
		// });
	}
	salvar(){
		// this.apiService.obterNumeroConta().subscribe((data:  any) => {
		// 	let transacao ={
		// 		conta: {id:data},
		// 		servico: this.servico1,
		// 		valor: this.valor1
		// 	}

		// 	this.apiService.novaTransacao(transacao).subscribe((data:  any) => {
		// 		alert(this.servico1.descricao + " realizado(a) com sucesso!");

		// 	});
		// });
	}
	
}
