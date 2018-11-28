import { Component, OnInit } from '@angular/core';
import { ServicoService } from  './servico.service';
import { FormsModule } from '@angular/forms';
import {Router} from "@angular/router";


@Component({
	selector: 'app-servico',
	templateUrl: './servico.component.html',
	styleUrls: ['./servico.component.css']
})
export class ServicoComponent implements OnInit {
	
	servico1 : any;
	valor1: any;
	servicos : any;
	
	constructor(private  apiService: ServicoService, private router: Router) {
	}
	
	ngOnInit() {
		this.apiService.obter().subscribe((data:  Array<object>) => {
			this.servicos = data;
		});
	}
	
	salvar(){
		this.apiService.obterNumeroConta().subscribe((data:  any) => {
			let transacao ={
				conta: {id:data},
				servico: this.servico1,
				valor: this.valor1
			}

			this.apiService.novaTransacao(transacao).subscribe((data:  any) => {
				alert(this.servico1.descricao + " realizado(a) com sucesso!");
				this.router.navigate(['/transacao']);
			});
		});
	}
	
}