import { Component, OnInit } from '@angular/core';
import { TransacaoService } from  './transacao.service';
import { FormsModule } from '@angular/forms'; 


@Component({
	selector: 'app-transacao',
	templateUrl: './transacao.component.html',
	styleUrls: ['./transacao.component.css']
})
export class TransacaoComponent implements OnInit {
	
	transacoes : any;
	saldo:number;
	
	constructor(private  apiService: TransacaoService) {
		this.saldo = 1000;
	}
	
	ngOnInit() {
		this.apiService.obterNumeroConta().subscribe((data:  any) => {
			if(data){
				this.apiService.obterTransacoes(data).subscribe((data:  Array<object>) => {
					this.transacoes = data;
					for (let i in this.transacoes) {
						this.saldo = this.saldo - this.transacoes[i].valor;
					}
					
				});
			}
		});
	}
	
	
}
