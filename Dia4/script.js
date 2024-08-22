let data = [
    {
        "informacion_personal": {
        "nombre": "Juan Pérez",
        "edad": 30,
        "direccion": {
        "calle": "Calle Principal",
        "numero": 123,
        "ciudad": "Ciudad Ejemplo"
        },
        "contacto": {
        "correo": "juan.perez@example.com",
        "telefono": "+123456789"
        }
        },
        "historial_educativo": [
        {
        "nivel": "Secundaria",
        "institucion": "Instituto Secundario",
        "anio_inicio": 2000,
        "anio_fin": 2005
        },
        {
        "nivel": "Universidad",
        "institucion": "Universidad Ejemplar",
        "titulo": "Licenciatura en Ciencias",
        "anio_inicio": 2006,
        "anio_fin": 2010
        }
        ],
        "experiencia_laboral": [
        {
        "puesto": "Desarrollador de Software",
        "empresa": "Tech Solutions",
        "periodo": "2010-2015",
        "responsabilidades": [
        "Desarrollo de aplicaciones web",
        "Mantenimiento de bases de datos"
        ]
        },
        {
        "puesto": "Gerente de Proyectos",
        "empresa": "Proyectos Avanzados",
        "periodo": "2016-actualidad",
        "responsabilidades": [
        "Planificación y supervisión de proyectos",
        "Coordinación de equipos"
        ]
        }
        ]
        }
];

let estres = prompt (
    "/////////////////////Bienvenido al menú/////////////////////\n"+
    "Ingresa una de las opciones: \n"+
    "1. añade\n"+
    "2. Crea\n"+
    "3. Elimina\n"+
    "4. Modifica\n"+
    "5. Salir\n"
) 

if (estres == 1){

}

else if (estres == 2){
    console.log("Ingrese su información personal");
    var nombre= prompt ("Ingrese su nombre: ")
    var edad= prompt("Ingrese su edad: ")
    console.log("Dirección");
    var calle= prompt("Ingrese la calle o carrera donde se encuentra ubicada su vivienda: ")
    var num= prompt("Ingrese el número de su vivienda: ")
    var ciudad= prompt ("Ingrese la ciudad donde vive: ")

    console.log("Ingrese su historial educativo");
    var nivelEst= prompt("Que nivel estudiantil maneja: ")
    var inst= prompt("En que institución estudió: ")
    console.log("Ingrese año de inicio y finalización de su estudio: ");
    var inicio= prompt("Año en el que inicio a estudiar: ")
    var fin= prompt("Año en el que finalizó sus estudios: ")

    console.log("Ingrese su historial Universiario");
    var univ= prompt("En que universidad estudió: ")
    var titulo= prompt("Que título obtuvo: ")
    console.log("Ingrese año de inicio y finalización de su estudio: ");
    var inicio= prompt("Año en el que inicio su carrera: ")
    var fin= prompt("Año en el que finalizó du carrera: ")

    var NuevoPlan= {
        "informacion_personal": {
        "nombre": nombre,
        "edad": edad,
        "direccion": {
        "calle": calle,
        "numero": 123,
        "ciudad": "Ciudad Ejemplo"
        },
        "contacto": {
        "correo": "juan.perez@example.com",
        "telefono": "+123456789"
        }
        },
        "historial_educativo": [
        {
        "nivel": "Secundaria",
        "institucion": "Instituto Secundario",
        "anio_inicio": 2000,
        "anio_fin": 2005
        },
        {
        "nivel": "Universidad",
        "institucion": "Universidad Ejemplar",
        "titulo": "Licenciatura en Ciencias",
        "anio_inicio": 2006,
        "anio_fin": 2010
        }
        ],
        "experiencia_laboral": [
        {
        "puesto": "Desarrollador de Software",
        "empresa": "Tech Solutions",
        "periodo": "2010-2015",
        "responsabilidades": [
        "Desarrollo de aplicaciones web",
        "Mantenimiento de bases de datos"
        ]
        },
        {
        "puesto": "Gerente de Proyectos",
        "empresa": "Proyectos Avanzados",
        "periodo": "2016-actualidad",
        "responsabilidades": [
        "Planificación y supervisión de proyectos",
        "Coordinación de equipos"
        ]
        }
        ]
        }
    data.push(NuevoPlan)
    console.log(data);
    
}

else if (estres == 3){

}

else if (estres == 4){

}
