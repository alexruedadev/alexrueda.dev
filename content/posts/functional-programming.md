---
id: 2
title: Programación funcional - JavaScript
image: /images/posts/functional-programming.png
createdAt: "2022-04-26 10:00:00"
language: Spanish
tags:
  - Functional
  - Programming
  - Javascript
  - How works
category: Javascipt
author:
  name: alex
  twitter: alexruedadev
  image: /images/resume/perfil-animated.png
---
<!-- Banner -->
<img width="100%" src='/images/posts/functional-programming.png' alt="Example"/>

# Qué es y cómo funciona la programación funcional en JavaScript.

La programación funcional es uno de los tres paradigmas de programación de JavaScript. Los paradigmas definen un conjunto de reglas que seguir al escribir código.

<!--more-->

Antes de saber qué es y cómo funciona la programación funcional, hay que comprender ciertos conceptos que forman parte de este paradigma de programación para saber por qué se utiliza y cuándo es más conveniente su práctica.

La programación funcional es un paradigma de programación de **estilo declarativo** con el cual le dices a la aplicación *qué* tiene que hacer, a diferencia del **estilo imperativo**, que le dice *cómo* tiene que hacerlo.

Veamos un ejemplo sencillo para distiguir estos dos estilos.

**Estilo imperativo**
````js
const numbers = [1,2,3,4,5];
let doubled = []

for(let i=0; i<numbers.length; i++){
  doubled.push(numbers[i] * 2);
}

console.log(doubled) // [2,4,6,8,10]
````

**Estilo declarativo**
````js
const numbers = [1,2,3,4,5];
const doubled = numbers.map(n => n * 2);

console.log(doubled) // [2,4,6,8,10]
````

Como se puede apreciar, el estilo declarativo puede ahorrarte varias lineas de código y bucles innecesarios, además de mejorar la legibilidad el programa. Si te fijas, también guardamos la función en una constante que nos permite volver a utilizarla en otro momento, haciendo así uso de [Lazy Evaluation], una estrategia que consiste en retrasar la ejecución del código hasta que sea necesario (cuando se llame al valor).

Hay algunos lenguajes de programación creados específicamente para ser utilizados de manera funcional, pero JavaScript no es uno de ellos. Aun así, podemos hacer uso de algunos **conceptos, prácticas y librerías** que nos ayudan a seguir este paradigma, como son:

* Asegurar la **inmutabilidad** de los datos de la aplicación.
* Usar **funciones puras**.
* Utilizar **funciones de orden superior**.
* Utilizar **curryling**.
* **Composición** de funciones.

## Inmutabilidad

Cuando utilizamos la programación funcional queremos evitar siempre modificar el uso de las variables y trabajar con datos inmutables.

## Funciones puras

Una función pura es aquella cuyo resultado será siempre el mismo para un valor de entrada, dependiendo solo del argumento recibido, por lo tanto, tiene **transferencia referencial** y no tiene **efectos colaterales**, es decir, no modifica ninguna variable fuera de la función.

**Función pura**
````js
function double(n){
  return n * 2;
}
// Devuelve siempre el mismo resultado (el doble) del argumento.
````

**Función impura**
````js
array.splice(5,6);
// Modifica el array, por lo que tiene efectos colaterales.
````

Algunos indicadores de que una función es **impura** son:

* No tiene argumentos de entrada.
* No devuelve ningun valor.
* Usa 'this'.
* Usa variables globales.

El **uso de funciones puras** en lugar de funciones o métodos impuros nos asegura que nuestros datos no se vean alterados accidentalmente

## Funciones de orden superior

Las funciones de orden superior son funciones que **admiten como parámetro a otras funciones** y pueden **devolver otras funciones**.

Vamos a crear una función que admite un parámetro y que devuelve otra función, que admite otro parámetro. 
````js
function lazyMultiply = (a) => (b) => a * b;

const perTwo = lazyMultiply(2);
````

Aquí, hacemos que 'a = 2' y que cada vez que llamemos a perTwo, devuelva una función que admite otro parámetro (b), sería algo como:
````js
function perTwo(b) => 2 * b // Se sustituye 'a' por '2' ya que ha adiquido valor en la función anterior.
````

Por lo tanto, la función 'lazyMultiply' admite dos parámetros (a,b) que pasará a la función que devuelve. Si solo se le pasa un parámetro (a), devolverá una función que admite otro parámetro (b). Pero si se pasan los dos, devolverá directamente el resultado (a * b). Sería como si hubieramos hecho esto:

````js
function lazyMultiply(a){
  return function per(b){
    return a * b;
  } 
}
````

Ahora, otro ejemplo un poco más complicado **pasando funciones como parámetros** y utilizando **Closures** (variables con scope dentro de la función)

### filter()

filter es una función de orden superior que pertenece al prototipo de los arrays, admite una función como parámetro y va a devolver `true` o `false` si se cumple la condición o no.

Si devuelve true, **devuelve una copia del elemento** que haya cumplido la condición.

Ejemplo básico
````js
let data = [1,2,3,4,5]

const res = data.filter(n => n > 3); // [4,5]
````

Ejemplo avanzado
````js
const mayorQue3 = elemento => elemento > 3

data.filter(mayorQue3);
````

La función filter, así como la mayoría de funciones de orden superior, admite varios parámetros:

`filter(callback[elemento, indice, array])`

### find

find devuelve el primer elemento que cumpla con la condición.

## Conceptos

- [Clousures]()
- [Composición]()
- [Pipelining]()



<!-- Links -->

[Lazy Evaluation]: https://www.codementor.io/@agustinchiappeberrini/lazy-evaluation-and-javascript-a5m7g8gs3