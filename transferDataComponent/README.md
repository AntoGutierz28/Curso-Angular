# Transferencia de datos entre componentes

Para hacer la transferencia de datos entre componentes se hace suso de la clase Input y Output

## Decorador Input

Envia la informacion entre componentes.
Ejemplo:
**app.component.html** : se agrega un atributo al tag

```
<app-card *ngFor="let item of lista" [dataEntrante]="item"></app-card>
```

Se agrega la clase y se declara la variable

```
import { Component, OnInit, Input } from '@angular/core';
...
export class CardComponent implements OnInit {
  @Input() dataEntrante: any;

  constructor() {}

  ngOnInit(): void {}
}
```

Para mostrar la variable en html, se realiza entre dos llaves.

```
<p>card {{ dataEntrante }}</p>
```

## Crear Servicios

Sirve de puente entre componente, para realizar una salida de datos

```
ng generate service serviceFav
```

Se importa e inicializa en el constructor de emisor y dl receptor

```
constructor(private servicioFavorito: ServiceFavService) {}
```

## Decorador output

Funciona como disparador en el componente receptor, en el servicio se debe colocar la siguiente sentencia

```
@Output() disparador: EventEmitter<any> = new EventEmitter();
```

Desde la componente emisor se realiza la funcion para emitir

```
agregarFavorito() {
    this.servicioFavorito.disparador.emit({
      data: this.dataEntrante,
    });
  }
```

Esta funcion va a ser ejecutada cada vez que se presione un boton

```
<button class="favorite" (click)="agregarFavorito()">Add favorite</button>
```

Para el componente receptor

```
  ngOnInit(): void {
    this.service.disparador.subscribe((data) => {
      this.listNombre.push(data);
      console.log(data);
    });
  }
```

que se va a mostrar haciendo el ercorrido en la extension .html

```
<p *ngFor="let nombre of listNombre">{{ nombre.data }}</p>
```
