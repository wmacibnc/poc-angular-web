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
      this.apiService.obterNomeConta().subscribe((data:  any) => {
        if(data){
          this.nome = data.nome;
        }
      });
    }

  atualizarNumeroConta(numeroConta){
    this.apiService.atualizarNumeroConta(numeroConta).subscribe((data2:  any) => {
      alert("Que bom que você voltou!!!");
      window.location.reload();
    });
  }

}
