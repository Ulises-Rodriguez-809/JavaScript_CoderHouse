const preguntasYRespuestas = [
    {
        pregunta: "JavaScript es un lenguaje?",
        respuesta: "Interpretado",
        opciones: {
            opcion1: "Igual q Java",
            opcion2: "Interpretado",
            opcion3: `Un Framework para diseño de sitios y aplicaciones web
            `,
            opcion4: "Ninguna de las anteriores"
        }
    },
    {
        pregunta: "let es una forma de delcarar variables?",
        respuesta: "Variable cuyo valor asignado puede cambiar",
        opciones: {
            opcion1: "Variable q siempre es de contexto global",
            opcion2: "Variable constante cuyo valor no puede cambiar",
            opcion3: "Variable cuyo valor asignado puede cambiar",
            opcion4: "Ninguna de las anteriores"
        }
    },
    {
        pregunta: "Los arrays se usan para?",
        respuesta: "Ninguna de las anteriores",
        opciones: {
            opcion1: "Crear clases",
            opcion2: "Intanciar objetos",
            opcion3: "Alamcenar multiples valores de un mismo tipo en una sola varibale",
            opcion4: "Ninguna de las anteriores"
        }
    },
    {
        pregunta:
            "Bootstrap se debe linkear antes o despues de nuestro archivo .css?",
        respuesta: "Antes",
        opciones: {
            opcion1: "No importa",
            opcion2: "Antes",
            opcion3: "Despues",
            opcion4: "Ninguna de las anteriores"
        }
    },
    {
        pregunta: `
        Que se imprime en consola el sigueinte codigo? 
        let num1 = '34';
        let num2 = 10;
        const resultado = num1 + num2; 
        `,
        respuesta: "3410",
        opciones: {
            opcion1: "3410",
            opcion2: 44,
            opcion3: 44.0,
            opcion4: "Ninguna de las anteriores"
        }
    },
    {
        pregunta: "Bootstrap es ?",
        respuesta: "Conjunto de herramientas para diseño de sitios y aplicaciones web",
        opciones: {
            opcion1: "Conjunto de herramientas para diseño de sitios y aplicaciones web",
            opcion2: "Un lenguaje de programacion",
            opcion3: "Conjunto de herramientas para hacer sitios y aplicaciones web responsive",
            opcion4: "Ninguna de las anteriores"
        }
    },
    {
        pregunta: "Cuantas formas de declarar una varibale hay en JavaScript?",
        respuesta: 3,
        opciones: {
            opcion1: 1,
            opcion2: 2,
            opcion3: 3,
            opcion4: "Mas de 3"
        }
    },
    {
        pregunta: "Se puede modificar el valor de una varibale const?",
        respuesta: "No",
        opciones: {
            opcion1: "Si",
            opcion2: "No",
            opcion3: "Depende el contexto donde se la crea",
            opcion4: "Ninguna de las anteriores"
        }
    },
    {
        pregunta: "For nos permite ?",
        respuesta: "Un bucle que ejecuta la misma sentencia una cierta cantidad de veces",
        opciones: {
            opcion1: "Ejecuta una sentencia si una condición específicada es evaluada como verdadera",
            opcion2: "Un bucle que ejecuta la misma sentencia una cierta cantidad de veces",
            opcion3: "Palabra reservada para crear objetos y clases",
            opcion4: "Ninguna de las anteriores"
        }
    },
    {
        pregunta: "En un archivo .css cuantas formas hay de seleccionar un elemento?",
        respuesta: "Clases, ID, Elemento(Tags), Atributo, etc",
        opciones: {
            opcion1: "Clases, ID, Elemento(Tags), Atributo, etc",
            opcion2: "Clases, ID, Elemento(Tags)",
            opcion3: "Clases, ID",
            opcion4: "Ninguna de las anteriores"
        }
    },
    {
        pregunta: "Cual es la utilidad de CSS?",
        respuesta: "Poner la web facherita",
        opciones: {
            opcion1: "El esqueleto del sitio web",
            opcion2: "Dar logica e interactividad al sitio web",
            opcion3: "Poner la web facherita",
            opcion4: "Ninguna de las anteriores"
        }
    },
    {
        pregunta: "HTML nos permite?",
        respuesta: "Ninguna de las anteriores",
        opciones: {
            opcion1: "Hacer mas facil el responsive del sitio web",
            opcion2: "Dar logica e interactividad al sitio web",
            opcion3: "Poner la web facherita",
            opcion4: "Ninguna de las anteriores"
        }
    },
    {
        pregunta: "Una funcion en JS es?",
        respuesta: "Un conjunto de instrucciones reutilizable que realiza una tarea o calcula un valor",
        opciones: {
            opcion1: "Un conjunto de instrucciones reutilizable que realiza una tarea o calcula un valor",
            opcion2: "Un bucle que permite repetir intrucciones una cierta cantidad de veces",
            opcion3: "Palabra reservada para crear objetos",
            opcion4: "Ninguna de las anteriores"
        }
    },
    {
        pregunta: "Una funcion es obligatorio que tenga parametros declarados?",
        respuesta: "No",
        opciones: {
            opcion1: "Si",
            opcion2: "No",
            opcion3: "Depende el contexto",
            opcion4: "Ninguna de las anteriores"
        }
    },
    {
        pregunta: "console.log() nos permite?",
        respuesta: "Escribir un mensaje en consola",
        opciones: {
            opcion1: "Muestra un texto y espera hasta que el usuario cierre la ventana de texto",
            opcion2: "Se usa para mostrar un cuadro texto que le pide al usuario ingresar datos",
            opcion3: "Escribir un mensaje en consola",
            opcion4: "Ninguna de las anteriores"
        }
    },
    {
        pregunta: "Un alert() muestra?",
        respuesta: "Muestra un texto y espera hasta que el usuario cierre la ventana de texto",
        opciones: {
            opcion1: "Muestra un texto y espera hasta que el usuario cierre la ventana de texto",
            opcion2: "Se usa para mostrar un cuadro texto que le pide al usuario ingresar datos",
            opcion3: "Escribir un mensaje en consola",
            opcion4: "Ninguna de las anteriores"
        }
    },
    {
        pregunta: "if nos permite ?",
        respuesta: "Ejecuta una sentencia si una condición específicada es evaluada como verdadera",
        opciones: {
            opcion1: "Ejecuta una sentencia si una condición específicada es evaluada como verdadera",
            opcion2: "Ejecuta una sentencia si una condición específicada es evaluada como falsa",
            opcion3: `Ejecuta una sentencia si una condición específicada sin importar 
            si esta es evaluada como true o false`,
            opcion4: "Ninguna de las anteriores"
        }
    },
    {
        pregunta: "El metodo push() nos permite?",
        respuesta: "Nos permite agragar un o varios elemento al final de un array",
        opciones: {
            opcion1: "Nos permite agragar un elemento al principio de un array",
            opcion2: "Nos permite agragar un elemento al final de un array",
            opcion3: "Nos permite agragar uno o varios elemento al final de un array",
            opcion4: "Ninguna de las anteriores"
        }
    },
    {
        pregunta: "Los Booleanos pueden tener solo?",
        respuesta: "2 valores",
        opciones: {
            opcion1: "1 valores",
            opcion2: "2 valores",
            opcion3: "3 valores",
            opcion4: "Mas de 3"
        }
    },
    {
        pregunta: "Los objetos son?",
        respuesta: "Un objeto es una colección de datos que se agrupan de manera clave-valor",
        opciones: {
            opcion1: `Un objeto es una colección de datos que se agrupan de manera 
            clave-valor pero todos sus atributos deben de ser del mismo tipo`,
            opcion2: "Un objeto es una clase",
            opcion3: "Un objeto es un funciones constructoras",
            opcion4: "Un objeto es una colección de datos que se agrupan de manera clave-valor"
        }
    },
    {
        pregunta: `
        El siguiente codigo tiene error cual es?
        const sumar = (a,b)=>{
            return a+b;
        }

        let res = sumar(5;6);
        console.log(res);
        `,
        respuesta: "Al llamar a la funcion los argumentos deben separarse con ,",
        opciones: {
            opcion1: "Al llamar a la funcion los argumentos deben ser pasados como objetos",
            opcion2: "Al llamar a la funcion los argumentos deben separarse con :",
            opcion3: "No tiene ningun error",
            opcion4: "Al llamar a la funcion los argumentos deben separarse con ,"
        }
    },
    {
        pregunta: ` El siguiente codigo tiene error xq?
        const person = {
        firstName: "John"
        lastName: "Doe"
        age: 50
        eyeColor: "blue"
        };
        console.log(person["age"])`,
        respuesta: "Faltan las , para separar los atributos",
        opciones: {
            opcion1: "Faltan las , para separar los atributos",
            opcion2: "Faltan las ; para separar los atributos",
            opcion3: "No todos sus atributos son del mismo tipo",
            opcion4: "Ninguna de las anteriores"
        }
    },
    {
        pregunta: "Usamos media queries para?",
        respuesta: "Aplicar estilos CSS según el tamaño de pantalla del dispositivo",
        opciones: {
            opcion1: "Intanciar un objeto",
            opcion2: "Aplicar estilos CSS según el tamaño de pantalla del dispositivo",
            opcion3: "Intanciar una clase",
            opcion4: "Ninguna de las anteriores"
        }
    },
    {
        pregunta: ` q se escribe en consola?
        const funcion1 = (a,b)=>{
            let c = 0
            return
            c = a+b;
        }

        let res = funcion1(5,5);`,
        respuesta: "undefined",
        opciones: {
            opcion1: "undefined",
            opcion2: "error",
            opcion3: 10,
            opcion4: 55
        }
    },
    {
        pregunta: `array1[3] q elemento es?
        const array1 = ["Hola", 55, true, {nombre : "Juan", edad : 25, altura : 1.80}];`,
        respuesta: "{ nombre: 'Juan', edad: 25, altura: 1.80 }",
        opciones: {
            opcion1: "Hola",
            opcion2: 55,
            opcion3: true,
            opcion4: "{ nombre: 'Juan', edad: 25, altura: 1.80 }"
        }
    },
];

export default preguntasYRespuestas;