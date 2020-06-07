import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CursosAngularCliComponent } from './cursos-angular-cli/cursos-angular-cli.component';
import { ProfessoresAngularCliComponent } from './professores-angular-cli/professores-angular-cli.component';

@NgModule({
  declarations: [
    AppComponent,
    CursosAngularCliComponent,
    ProfessoresAngularCliComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
