---
id: 
title: Diagramas de comportamiento
image: /images/posts/
createdAt: "2022-04-26 10:00:00"
language: Spanish
tags:
  - Behavior
  - Diagrams
  - Development
category: What is
author:
  name: alex
  twitter: alexruedadev
  image: /images/resume/perfil-animated.png
---
<!-- Banner -->
<!-- <img width="100%" src='/images/posts/functional-programming.png' alt="Example"/> -->

# Qué son y cómo funcionan los diagramas de comportamiento.

A diferencia de los [diagramas estructurales](link_diagramas_estructurales), los diagramas de comportamiento muestran cómo se comporta un sistema de información de forma dinámica, es decir, **describe los cambios que sufre un sistema a través del tiempo** cuando está en ejecución.

<!--more-->

Índice:

1. Diagramas de comportamiento
    - Diagramas de actividad
        - Elementos
        - Recomendaciones

## Diagramas de actividad

Los diagramas de comportamiento representan un fliujo de actividades paso a paso y permiten expresar **condiciones, iteraciones y concurrencia**. Se muestran los cambios de estados sin especificar las causas (externas) de ese cambio de estado. Estos estímulos externos se definen en el [diagrama de estados](link).

Los diagramas de actividad tienen 12 elementos y X conceptos:

Elementos:

0. Las notas: Son aclaraciones para entender mejor algunos pasos. NO forman parte del diagrama.

0. Particiones verticales o carriles(Opcionales):

  - Definición: Son los lugares o los agentes que realizan la actividad.
  - Representación: Columnas que dividen el diagrama en carriles. Cada carril tiene un nombre único y cada actividad está en un carril.
  - Recomendación: Las transiciones y las barras puede cruzar carriles.

1. Nodo inicial:

  - Definición: Inicia la actividad.
  - Representación: Punto relleno.
  - Recomendación: Debe estar en el carril del primer nodo. No es obligatorio incluirlo, pero es lo común.

2. Acciones o Nodos:

  - Definición: Representa la actividad o la acción. 
  - Representación: Un verbo en un rectángulo redondeado.
  - Recomendación: Deben comenzar con un verbo.

3. Objetos:

  - Definición: Son datos de entrada o salida de las actividades.
  - Representación: Un nombre de un objeto (es una instancia de una clase).
  - Recomendación: Se puede poner entre corchetes el estado de ese objeto [Enviado, Recibido, Pendiente...]

4. Rombos de bifurcación (Decisión):

  - Definición:
  - Representación:
  - Recomendación:

5. Rombos de fusión (Merge):

  - Definición: A este punto llegan una o más lineas y sale solo una. El proceso continua cuando cualquiera de los flujos llega.
  - Representación: Rombo (doble).
  - Recomendación: No es necesario que sean dobles ni rellenos.

6. Flujo o transición:

  - Definición: Muestra el orden de ejecución de las actividades.
  - Representación: Flecha continua.
  - Recomendación: Evitar los cruces de flechas.

7. Flujo de datos:

  - Definición: Muestra flujo de datos.
  - Representación: Flecha discontinua.
  - Recomendación:

8. Fork:

  - Definición: Es el comienzo de varias actividades en paralelo (acciones concurrentes).
  - Representación: Barra negra horizontal o vertical.
  - Recomendación:

9. Join:

  - Definición: Une acciones concurrentes en una sola acción. El flujo de la actividad no puede continuar hasta que todas las acciones concurrentes lleguen.
  - Representación: Barra negra horizontal o vertical.
  - Recomendación: 

10. Condiciones de guardia: 

  - Definición: Indican las condiciones que se cumplen al seguir un camino u otro.
  - Representación: Texto.
  - Recomendación: Deben definirse junto al flujo de salida, no dentro del rombo.

11. Nodo final:

  - Definición: Representan el final de todos los flujos de acciones del diagrama.
  - Representación:
  - Recomendación: Deben estar en el carril del último nodo que les enlaza.

**Los estados finales** deben tener una única flecha de entrada y una única flecha de salida. Se les puede anteponer un merge.

**Cuidado al usar fork y join**, no tienen nada que ver con un merge.

Conceptos:

- Concurrencia (Hilos concurrentes): Acciones que se ejecutan en paralelo, y para continuar la ejecución deben de unirse en un JOIN.
