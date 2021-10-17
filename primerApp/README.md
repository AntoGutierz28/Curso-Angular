# Componente

Un componente es un codigo que se puede reutilizar, esta compuesto por tres archivos de la siguientes extensiones:

- .ts
- .html
- .csss

## Generar componente

```
ng generate component nombre
```

Se agrega de manera automatica en app.module.ts, en la seccion de declaraciones

## Invicación de los componentes

El componente principal se encuentra en **app.component.html**, es invocado en **index.html** mediante la etiqueta **app-root**.
Para agregar los nuevos componentes en **app.component.html**, solo se tiene que agregar las etiquetas **app-component**.

## Interpretacion del archivo Typescript

El archivo typescript posee un identificador **Component** el gual tiene los siguientes parametros:

- selector : Nombre de la etiqueta que se va a utilizar para invocar
- templateUrl : Ruta del archivo html
- stylrUrls: Ruta de hoja de estilo

## Creación de variables

Para agregar variables se debe declarar dentro de la clase, e inicializarlo dentro de la funcion **ngOnInit**, el ual se ejecuta al ser invocado el componente.
