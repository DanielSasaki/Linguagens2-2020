import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CursosAngularCliComponent } from './cursos-angular-cli/cursos-angular-cli.component';
import { ProfessoresAngularCliComponent } from './professores-angular-cli/professores-angular-cli.component';
import { AlunosAngularCliComponent } from './alunos-angular-cli/alunos-angular-cli.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CursosAngularCliComponent,
    ProfessoresAngularCliComponent,
    AlunosAngularCliComponent,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
