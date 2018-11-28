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
		this.apiService.obter().subscribe((data:  Array<object>) => {
			this.servicos = data;
			console.log(data);
		});
		
		this.apiService.obterTransacoes(5).subscribe((data:  Array<object>) => {
			this.transacoes = data;
			console.log(data);
			for (let i in this.transacoes) {
				this.saldo = this.saldo - this.transacoes[i].valor;
			}

		});
	}
	
	criarConta(){
		let conta = {
			pessoa:{
				nome:this.nomeText
			}
		}
		
		this.apiService.novoCadastro(conta).subscribe((data:  any) => {
			console.log(data);
			debugger
			this.apiService.atualizarNumeroConta(data.id).subscribe((data:  any) => {
				alert("Conta Criada com sucesso! Anote o número da sua conta: 000" + data.id);
				console.log(data);
			});
			debugger
		});
	}
	salvar(){
		this.apiService.obterNumeroConta().subscribe((data:  any) => {
			alert(data);
		});
		let transacao ={
			conta: {id:5},
			servico: this.servico1,
			valor: this.valor1
		}
		this.apiService.novaTransacao(transacao).subscribe((data:  any) => {
			console.log(data);
			alert(this.servico1.descricao + " realizado(a) com sucesso!");
			debugger
		});
	}
	
}
