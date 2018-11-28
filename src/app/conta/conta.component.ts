import { Component, OnInit } from '@angular/core';
import { ContaService } from  './conta.service';
import { FormsModule } from '@angular/forms'; 
import {Router} from "@angular/router";


@Component({
	selector: 'app-conta',
	templateUrl: './conta.component.html',
	styleUrls: ['./conta.component.css']
})
export class ContaComponent{
	
	nomeText : any;
	
	constructor(private  apiService: ContaService, private router: Router) {
	}
	
	criarConta(){
		let conta = {
			pessoa:{
				nome:this.nomeText
			}
		}
		
		this.apiService.novoCadastro(conta).subscribe((data:  any) => {
			this.apiService.atualizarNumeroConta(data.id).subscribe((data2:  any) => {
				alert("Conta Criada com sucesso! Anote o número da sua conta: 000" + data.id);
				this.router.navigate(['/transacao']);

			});
		});
	}	
}
