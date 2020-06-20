import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alunos-angular-cli',
  templateUrl: './alunos-angular-cli.component.html',
  styleUrls: ['./alunos-angular-cli.component.css'],
})
export class AlunosAngularCliComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  salvar(alunoForm) {
    const nome = alunoForm.value.nome;
    const idade = alunoForm.value.idade;
    const email = alunoForm.value.email;
    const curso = alunoForm.value.curso;
    console.log(
      `Nome: ${nome}, Idade: ${idade}, Email: ${email}, Curso: ${curso}`
    );
  }

  cursos = [
    'Engenharia de Computação',
    'Engenharia Civil',
    'Engenharia Mecânica',
    'Engenharia de Controle e Automação',
  ];

  alunos = [
    {
      nome: 'Fabio Kawasaki',
      idade: '24',
      email: '13.02838-3@maua.br',
      curso: 'Engenharia de Computação',
    },
  ];
  adicionar(nome, idade, email, curso) {
    this.alunos = [
      { nome: nome, idade: idade, email: email, curso: curso },
      ...this.alunos,
    ];
  }
}
