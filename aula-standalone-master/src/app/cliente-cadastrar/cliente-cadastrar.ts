import { Component } from '@angular/core';

import { InputTextModule } from 'primeng/inputtext';
import { FloatLabelModule } from 'primeng/floatlabel';
import { CardModule } from 'primeng/card';
import { SelectModule } from 'primeng/select';
import { InputMaskModule } from 'primeng/inputmask';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-cliente-cadastrar',
  standalone: true,
  imports: [
    InputTextModule,
    FloatLabelModule,
    CardModule,
    SelectModule,
    InputMaskModule,
    ButtonModule
  ],
  templateUrl: './cliente-cadastrar.html',
  styleUrl: './cliente-cadastrar.css'
})
export class ClienteCadastrar {

  tipoPessoaOptions: any[] = [
    { descricao: 'Pessoa Física', valor: 'PF' },
    { descricao: 'Pessoa Jurídica', valor: 'PJ' }
  ];

}