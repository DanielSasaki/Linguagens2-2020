import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cursos-angular-cli',
  templateUrl: './cursos-angular-cli.component.html',
  styleUrls: ['./cursos-angular-cli.component.css'],
})
export class CursosAngularCliComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  textoBotao = 'Esconder';
  esconder = false;
  cursos = [
    {
      nome: 'Engenharia de Computação',
      desc:
        'A Engenharia de Computação está presente em nosso dia a dia e nas mais diversas áreas: Educação, Indústrias, Redes de Comunicação e Dispositivos Móveis, Transportes, Entreterimento, entre outras. Essa diversidade de aplicações para o Engenheiro de Computação qualifica-o para atuar como desenvolvedor, engenheiro, empreendedor, executivo de grandes corporações.',
    },
  ];
  adicionar(nome, desc) {
    this.cursos = [{ nome: nome, desc: desc }, ...this.cursos];
  }
  alterarExibicao() {
    this.textoBotao = this.esconder ? 'Esconder' : 'Exibir';
    this.esconder = !this.esconder;
  }
}
