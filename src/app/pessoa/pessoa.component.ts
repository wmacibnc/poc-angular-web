import { Component, OnInit } from '@angular/core';
import { PessoaService } from  './pessoa.service';

@Component({
	selector: 'app-pessoa',
	templateUrl: './pessoa.component.html',
	styleUrls: ['./pessoa.component.css']
})
export class PessoaComponent implements OnInit {

	constructor(private  apiService: PessoaService) {

	}

	ngOnInit() {
		debugger
		this.apiService.todos().subscribe((data:  Array<object>) => {
			//this.contacts  =  data;
			console.log(data);
		});
	}

}
