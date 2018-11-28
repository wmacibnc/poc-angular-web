import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ContentComponent } from './../content/content.component';
import { PessoaComponent } from './../pessoa/pessoa.component';
import { ContaComponent } from './../conta/conta.component';
import { ServicoComponent } from './../servico/servico.component';
import { TransacaoComponent } from './../transacao/transacao.component';

const routes: Routes = [
  { path: '', component: ContentComponent },
  { path: 'pessoa', component: PessoaComponent },
  { path: 'conta', component: ContaComponent },
  { path: 'servico', component: ServicoComponent },
  { path: 'transacao', component: TransacaoComponent },
];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule { }