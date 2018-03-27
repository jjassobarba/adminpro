import { Component, OnInit, OnDestroy } from '@angular/core';
// tslint:disable-next-line:import-blacklist
import { Observable, Subscription } from 'rxjs/Rx';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: []
})
export class RxjsComponent implements OnInit, OnDestroy {

  subscription: Subscription;

  constructor() {
    this.subscription = this.regresaObservable()
      .subscribe(
        numero => console.log('Subs ', numero),
        error => console.error('Error en el obs', error),
        () => console.log('El observador terminó')
      );
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  regresaObservable(): Observable<Number> {
     // tslint:disable-next-line:prefer-const
     return new Observable(observer => {
      let contador = 0;
      // tslint:disable-next-line:prefer-const
      let intervalo = setInterval(() => {
        contador += 1;
        // tslint:disable-next-line:prefer-const
        let salida = {
          valor: contador
        };
        observer.next(salida);
        // if (contador === 3) {
        //   clearInterval(intervalo);
        //   observer.complete();
        // }
        // if (contador === 2) {
        //   observer.error('Auxilio');
        // }
      }, 500);
    })
    .map( (resp: any) => {
      return resp.valor;
    })
    .filter((valor, index) => {
      return (valor % 2) === 1;
    });
  }

}
