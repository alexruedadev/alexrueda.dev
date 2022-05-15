La navegablidad es un tipo de relación que indica que un objeto de una clase tiene la posibilidad de decidir qué clase de objeto se le asocia a otra clase de objeto.

La **multiplicidad o cardinalidad** indica cuántas instancias de tipo A pueden asociarse a una de tipo B en un determinado momento. Restringe el numero de objetos de una clase que participan en la relación. [1, , 0..,0..1,1.., 5..9, 2,4,6 ]

La **herencia** define la relación entre una superclase o una o varias subclases, recogen el mismo concepto, pero las subclases están más detalladas. Las subclases pueden tener *herencia múltiple* y heredar de más de una superclase. Pueden ser una **generalización o especialización**.

## Tips y pasos al crear un diagrama de clases.

1. Identificar las **clases**:

2. Identificar sus **atributos y métodos**:

    - Recuerda que no hay que incluir claves ajenas en las clases.

3. Identificar la **visibilidad** de atributos y métodos: Los atributos suelen ser privados.

4. Identificar los **tipos de relaciones** entre las clases:

    - En el caso de ser una *asociación*:

        1. Identificar el *nombre de la asociación*, *tiene que ser un verbo*.

        2. Identificar los *roles*. uno por cada unidad de la asociación (Si es binaria, tendrá dos roles).

        3. Identificar la *multiplicidad*.

        4. Identificar la *navegabilidad*.

        5. Identificar si hay *restricciones*. Se escriben en notas con texto normal entre llaves {}

    - En el caso de ser una *herencia*:

    - En el caso de ser una *agregación*:

    - En el caso de ser una *composición*:
