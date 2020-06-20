import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Aula10';

  stylesBotao() {
    return {
      color: '#ffffff',
      backgroundColor: '#007bff',
      padding: '8px',
      width: '20%',
      border: 'none',
      borderRadius: '4px',
    };
  }
  obterClassesRodape() {
    return ['rodape'];
  }
}
