import { Component } from '@angular/core';
import { interval, Observable, tap } from "rxjs";

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrl: './uncommon-page.component.css'
})
export class UncommonPageComponent {

  // I18n select
  public name: string = 'Eduardo';
  public gender: 'male' | 'female' = 'male';
  public invitationMap = {
    'male': 'invitarlo',
    'female': 'invitarla'
  }

  changeClient(): void {
    if (this.name === 'Eduardo') {
      this.name = 'Maria';
      this.gender = 'female';
    } else {
      this.name = 'Eduardo';
      this.gender = 'male';
    }
  }

  // I18n plural
  public clients: string[] = ['Eduardo', 'Maria', 'Pedro', 'Juan', 'Pablo', 'Luis', 'Carlos', 'Andres', 'Javier', 'Jose'];
  public clientsMap = {
    '=0': 'no tenemos ningún cliente esperando',
    '=1': 'tenemos un cliente esperando',
    'other': 'tenemos # clientes esperando'
  };
  deleteClients():void {
    this.clients.shift();
  }

  // Keyvalue pipe
  public person = {
    name: 'Eduardo',
    age: 31,
    address: 'Calle 123, Ciudad'
  }

  // Async pipe
  public myObservableTimer: Observable<number>
    = interval(2000)
    .pipe(
      tap(value => console.log('Timer value', value)),
    );

  public promiseValue = new Promise<string>((resolve, reject) => {
    setTimeout(() => {
      resolve('Tenemos data en la promesa');
    }, 3500);
  });
  /*public myObservable = new Observable((subscriber) => {
    setTimeout(() => {
      subscriber.next('first value');
    }, 1000);
    setTimeout(() => {
      subscriber.next('second value');
    }, 2000);
    setTimeout(() => {
      subscriber.complete();
    }, 3000);
  });*/
}
