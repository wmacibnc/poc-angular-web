import { Component, OnInit } from '@angular/core';
import { PessoaService } from  '../../app/pessoa/pessoa.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  nome:any;

  constructor(private  apiService: PessoaService) {
    this.nome = "Visitante";
   }

  ngOnInit() {
      this.apiService.obterNomeConta().subscribe((data2:  any) => {
        if(data2){
          this.nome = data2;
        }
      });
    }

  atualizarNumeroConta(numeroConta){
    this.apiService.atualizarNumeroConta(numeroConta).subscribe((data2:  any) => {
      alert("Que bom que você voltou!!!");
    });
  }

}
