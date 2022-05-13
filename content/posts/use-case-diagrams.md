---
id: 4
title: Diagramas de uso
image: /images/posts/use-case-diagram.png
createdAt: "2022-04-26 10:00:00"
tags:
  - Diagrams
  - Usage
  - Software
  - Development
category: What is
author:
  name: alex
  twitter: alexruedadev
  image: /images/resume/perfil-animated.png
---

# Qué es un diagrama de casos de uso.

El diagrama de casos de uso es una forma de **diagrama de comportamiento UML** mejorado, cuyo objetivo es describir el comportamiento de un sistema (o aplicación) desde el punto de vista del usuario que interactúa con el.

<!--more-->

Los diagramas de casos de uso **son una herramienta muy buena para obtener los requisitos de software** durante la fase de análisis de un proyecto. Se crearon con los siguientes objetivos:

- **Diseñar un conjunto de escenarios** que faciliten una descripción de cómo se usará el sistema.
- Dar una descripción clara de **cómo el usuario interactúa con el sistema y biceversa**.
- Dar una base para la **validación de las pruebas**.

<div id="post-index">
  <p id="post-index-title">Index</p>
  <div id="post-index-body">
  <ol>
    <li><a>Componentes</a>
    <ul>
      <li><a>Actores</a></li>
      <li><a>Casos de uso</a></li>
      <li><a>Relaciones</a>
        <ul>
          <li><a>Asociation</a></li>
          <li><a>Include</a></li>
          <li><a>Exclude</a></li>
          <li><a>Generalization</a></li>
        </ul>
      </li>
        <li><a>Sistema</a></li>
        <li><a>Notaciones</a></li>
    </ul>
    </li>
    <li><a>Buenas Prácticas</a></li>
    <li><a>Plantilla de análisis</a></li>
  </ol>
  </div>
</div>

## 1. Componentes

### # Actores

Los actores son las entidades externas al sistema que interactuan con él.

Para identificar a los actores debemos saber **qué y quién** interactúa con el sistema y **qué roles desempeñan** cuando interactúan con él. Para ello, debemos considerar:

- Los actores son siempre **externos al sistema e interactuan directamente con él**.
- **Representan roles** que personas o elementos tienen con el sistema.
- Una misma entidad puede interpretar varios roles como actores distintos.

Los actores pueden ser de dos tipos:

- **Principales**: Los que activan el caso de uso.
- **Secundarios**: Los que interactúan con el caso de uso una vez activado.

### # Casos de uso

Un caso de uso es la interacción que se produce entre un actor y el sistema. Su nombre debe identificar la tarea específica que el actor desea llevar a cabo.

Ejemplos: *Comprar, vender, restablecer, alquilar...*

Para identificar los casos de uso necesitamos entender qué hace el sistema y qué hace el actor al
interactuar con él. Es muy útil hacernos estas preguntas:

- ¿Qué tareas hacen los actores relacionados con el sistema?
- ¿Qué información crea/lee/guarda/modifica/borra el actor?
- ¿Notifica el actor de los cambios externos ocurridos al sistema?
- ¿Notifica el sistema de los cambios internos a un actor?
- ¿Interactúa el sistema con algún sistema externo?

Los casos de uso se especifican en modo texto, y se puede __crear una plantilla__ con estos elementos:

- **Nombre**: el nombre del CU
- **ID**: el identificador del CU
- **Breve descripción**: lo que se espera que haga el CU
- **Actores implicados**: principales o secundarios
- **Precondiciones**: las condiciones a cumplir antes de que empiece el CU
- **Curso normal**: pasos cronológicos que llevan a finalizar con éxito el CU
- **Postcondiciones**: condiciones que han de cumplirse al acabar el CU
- **Alternativas**: desviaciones del curso normal del CU (errores, excepciones, etc). El sistema deberá informar de ellas al usuario.

Ejemplo: *Comprar_productos*
<div class="border-2 rounded-md" style="border-color: gray">
<table>

  <tr>
    <td>
    <b>Nombre</b>: Comprar_productos
    </td>
    
  </tr>

  <tr>
    <td>
    <b>ID</b>: CU-3
    </td>
  </tr>

  <tr>
    <td>
      <b>Description</b>: El cliente selecciona los productos a comprar y escribe la cantidad deseada. El sistema comprueba si hay existencias y muestra el importe por cada producto seleccionado. Cuando el cliente no desea comprar más productos, el sistema muestra el importe total de la compra y solicita al cliente el pago de la misma.
    </td>
  </tr>

  <tr>
    <td>
      <b>Actores</b>: Cliente
    </td>
  </tr>

  <tr>
    <td>
      <b>Precondiciones</b>: Se requiere que el cliente esté registrado en el sistema.
    </td>
  </tr>

  <tr>
    <td>
      <b>Curso normal del caso de uso</b>:<br>
        1. El cliente selecciona comprar productos.<br>
        2. El cliente selecciona un producto y escribe la cantidad.<br>
        3. El sistema valida los datos introducidos.<br>
        4. El sistema muestra el importe y el total acumulado.<br>
        5. El cliente repite los pasos 2 a 4 hasta indicar fin de compra.<br>
        6. El sistema calcula el importe total y lo muestra al cliente.<br>
        7. El sistema finaliza la compra y solicita la forma de pago al cliente.<br>
        8. El cliente selecciona la forma de pago.<br>
        9. El sistema solicita los datos al cliente según la forma de pago elegida.<br>
        10. El cliente introduce los datos.<br>
        11. El cliente realiza el pago.<br>
        12. El sistema muestra la confirmación del pago y registra la compra del cliente.<br>
    </td>
  </tr>

  <tr>
    <td>
      <b>Postcondiciones</b>: El cliente realiza la compra de productos.
    </td>
  </tr>

  <tr>
    <td>
      <b>Alternativa 1</b>: <br>
      3.1. El producto seleccionado no tiene existencias.<br>
      3.2. El sistema informa al cliente que no hay existencias.<br>
      3.3. Continuar con el paso 5 del curso normal.<br>
    </td>
  </tr>

  <tr>
    <td>
      <b>Alternativa 2</b>: <br>
      6.1. SI el importe total es 0:<br>
          6.1.1. Fin del caso de uso.
    </td>
  </tr>

  <tr>
    <td>
      <b>Alternativa 3</b>: <br>
      10.1. Los datos introducidos por el cliente no son correctos.<br>
      10.2. El sistema informa al cliente.<br>
      10.3. Fin del caso de uso.<br>
    </td>
  </tr>

</table>
</div>

Para usar esta documentación hemos de tener en cuenta que:
- Se han de usar frases sencillas
- No se deben hacer referencias a elementos de la interfaz de usuario (ej. página principal, pantalla de ingreso, botones,etc.)
- Se deben evitar detalles arquitectónicos (ej. decir “el sistema almacena el pedido” en vez de “el sistema almacena el pedido en la base de datos MySQL”).

Los casos de uso son muy limitados ya que se describen con texto informal. Por lo tanto,
deberemos usar una nueva notación para especificar este comportamiento interno. En UML
se propone usar una notación llamada “Diagrama de Actividad”.

### # Relaciones

...desc

Hay varios tipos de relaciones:

- Asociación

- Extensión

- Inclusión

- Generalización

#### Relación de asociación

Es la linea de comunicación entre un actor y un caso de uso en el que participa. **Expresa que un actor realiza una acción**.

> Representación: una linea continua. (algunos autores utilizan una punta de flecha)

Ejemplo:

<!-- image or div -->

#### Relación de inclusión

Permite que un caso de uso base inluya en el comportamiento de otro caso de uso.

Se realizan con **aquellas relaciones entre un caso de uso general y casos de uso que deben de realizarse**. Esta relación es **indispensable** para que el CU base sea terminado con éxito.

> Representación: una flecha discontinua con la palabra <<include>>

La relación apunta al caso de uso a ser incluido, es decir, del caso general al caso más
concreto.

Ejemplo:

<!-- image or div -->

#### Relación de extensión.

Permite que un caso de uso extienda su comportamiento con uno o más fragmentos de
comportamiento de otro. Se utiliza para especificar que el comportamiento de un caso de uso es diferente dependiendo de ciertas circunstancias.

> Representación: Flecha discontinua con la palabra <<exclude>>

A diferencia de en la inclusión, **el CU extendido no sabe nada del CU que lo extiende**.

Su uso aporta valor extra, pero no es indispensable.

El CU base sí debe tener una descripción textual que indique qué puntos podrían ser
ampliados.

#### Relación de generalización

Es como la generalización entre clases. **El caso de uso hijo hereda el comportamiento y el significado del caso de uso padre**. 

Indica que un elemento es el caso general de otro. Se usa cuando se tiene uno o
más CU que son especificaciones de un CU más general.

La relación de generalización se puede hacer entre actores o entre casos de uso.

### # Sistema

## Buenas prácticas en los diagramas de casos de uso.

1. Empezar los nombres de los casos de uso con un verbo.
2. **Nombrar a los actores con sustantivos** relacionados con las reglas de negocio.
3. **Nombrar a los actores conforme a sus roles**. No con su cargo en el sistema.
4. **Representar los actores en orden descendiente**, con los más importantes arriba.
5. **La etiqueta `<<incluye>>` no es obligatoria**. Incluirla sólo si aclara el diseño. 
6. **No abusar de la etiqueta `<<extiende>>`**, ya que dificulta la comprensión del caso.
7. Concentrarnos en los requisitos de uso, la funcionalidad concreta es fase de diseño.
8. **Situar los casos incluidos a la derecha del caso que los incluye** ayuda a entender el diagrama. En A > incluye > B intentaremos que B quede a la derecha de A.
9. **Situar los casos que extienden debajo del caso padre**, al igual que los casos que heredan o generalizan. En A < extiende < B intentaremos que B quede debajo de A.
10. **Es útil intentar expresar con “es un” la generalización de actores** para comprobar si los estamos modelando correctamente.

## Plantilla de Análisis
<table>
  <tr>
    <td>
      <h4>1. Detecta los sustantivos (<b>Posibles actores</b>), los verbos (<b>Posibles casos de uso</b>) y las <b>instrucciones específicas</b>.</h4>
    </td>
  </tr>
  <tr>
  <td>
  Posibles actores:

  Posibles casos de uso:

  Instrucciones específicas:

  </td>
  </tr>

  <tr>
  <td>
    <h4>2. Deduce cuáles son los actores, los casos de uso principales(los que dependen directamente de los actores) y los secundarios.</h4>
  </td>
  </tr>


  <tr>
  <td>
  Actores:

  Casos de uso principales:

  Casos de uso secundarios:
  </td>
  </tr>

  <tr>
  <td>
    <h4>3. Escoger el tipo de relación entre los casos de uso secundarios.</h4>
  </td>
  </tr>

  <tr>
  <td>
  Inclusiones (acciones que siempre van a ejecutarse):

  Exclusiones ():
  </td>
  </tr>

  <tr>
  <td>
  <h4>4. Alternativas válidas.</h4>
  </td>
  </tr>

  <tr>
  <td>
Explicación:

> Con demasiada frecuencia existen varios casos de uso válidos para un mismo enunciado, así que **debes indicar, con una nota o comentario, qué decisión tomas para resolver la ambigüedad**.

  </td>
  </tr>
</table>

## Herramientas

- Visual Paradigm

- LibreOffice Draw

- Argo UML

- Eclipse o Netbeans: Permiten incluir módulos o plugins sobre UML.