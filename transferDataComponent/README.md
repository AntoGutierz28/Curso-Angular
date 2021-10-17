# Transferencia de datos entre componentes

Para hacer la transferencia de datos entre componentes se hace suso de la clase Input y Output

## Clase Input

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
