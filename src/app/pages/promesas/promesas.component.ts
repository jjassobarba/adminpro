import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styles: []
})
export class PromesasComponent implements OnInit {

  constructor() {
    this.contarTres().then(
      () => console.log('Terminó!!'),
      () => console.error('Falló'));
  }

  ngOnInit() {
  }

  contarTres(): Promise<boolean> {
    // tslint:disable-next-line:prefer-const
    return new Promise((resolve, reject) => {
      let contador = 0;
      const intervalo = setInterval(() => {
        contador += 1;
        if (contador === 3 ) {
          resolve();
          clearInterval(intervalo);
        }
      }, 1000);
    });
  }

}
