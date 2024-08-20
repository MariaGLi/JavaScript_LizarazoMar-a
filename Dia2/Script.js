const json= `[
    {
        "Tipo": "Trainers",
        "Trainers": [
            {
                "Nombre": "Miguel Sanchez",
                "Ruta": [
                    "Java"
                ],
                "Salon": "Sputnik,",
                "Grupo": "T1 - T4 - T7"
            },
            {
                "Nombre": "Jholver Garcia",
                "Ruta": [
                    "NetCore"
                ],
                "Salon": "Apolo",
                "Grupo": "T2 - T5"
            },
            {
                "Nombre": "Pedro Gomez",
                "Ruta": [
                    "NodeJS"
                ],
                "Salon": "Artemis",
                "Grupo": "T3 - T6"
            }
        ]
    },
    {
        "Tipo": "Coordinadores",
        "Coordinadores": [
            {
                "Nombre": "Brayam Stiven Carvajal Cucaita",
                "Password": "Campus123"
            }
        ]
    },
    {
        "Tipo": "Inscritos",
        "Estudiantes": [
            {
                "Identificador": 1,
                "Estado": "Inscrito",
                "Ruta": "",
                "Documento": 12313,
                "Nombres": "Brayan Stiven",
                "Apellidos": "Maldonado Ortega",
                "Direccion": "nose",
                "Acudiente": "Josefa",
                "Celular": 345342323,
                "Fijo": 67545353,
                "NotaPrueba": 0,
                "EstadoFundamentos": "",
                "EstadoProWeb": "",
                "EstadoProFormal": "",
                "EstadoBasesDatos": "",
                "EstadoBackend": ""
            },
            {
                "Identificador": 2,
                "Estado": "Inscrito",
                "Ruta": "",
                "Documento": 12313,
                "Nombres": "Maria Guadalupe",
                "Apellidos": "Lizarazo Leal",
                "Direccion": "jum",
                "Acudiente": "Patrocla",
                "Celular": 31213412,
                "Fijo": 2984923,
                "NotaPrueba": 0,
                "EstadoFundamentos": "",
                "EstadoProWeb": "",
                "EstadoProFormal": "",
                "EstadoBasesDatos": "",
                "EstadoBackend": ""
            },
            {
                "Identificador": 3,
                "Estado": "Inscrito",
                "Ruta": "",
                "Documento": 12313,
                "Nombres": "Juancho",
                "Apellidos": "Figueroa",
                "Direccion": "jum",
                "Acudiente": "Pepita",
                "Celular": 2131232,
                "Fijo": 245343,
                "NotaPrueba": 0,
                "EstadoFundamentos": "",
                "EstadoProWeb": "",
                "EstadoProFormal": "",
                "EstadoBasesDatos": "",
                "EstadoBackend": ""
            },
            {
                "Identificador": 4,
                "Estado": "Inscrito",
                "Ruta": "",
                "Documento": 12313,
                "Nombres": "Jose",
                "Apellidos": "Gomez",
                "Direccion": "jum",
                "Acudiente": "Guillermina",
                "Celular": 43543542,
                "Fijo": 25465423,
                "NotaPrueba": 0,
                "EstadoFundamentos": "",
                "EstadoProWeb": "",
                "EstadoProFormal": "",
                "EstadoBasesDatos": "",
                "EstadoBackend": ""
            },
            {
                "Identificador": 5,
                "Estado": "Inscrito",
                "Ruta": "",
                "Documento": "1234",
                "Nombres": "Jose Jose",
                "Apellidos": "Perez",
                "Direccion": "cll 1c 8v - 54",
                "Acudiente": "Josefina",
                "Celular": "1334234",
                "Fijo": "4353423",
                "NotaPrueba": 0,
                "EstadoFundamentos": "",
                "EstadoProWeb": "",
                "EstadoProFormal": "",
                "EstadoBasesDatos": "",
                "EstadoBackend": ""
            }
        ]
    },
    {
        "Tipo": "Cursando",
        "Estudiantes": []
    },
    {
        "Tipo": "Expulsados",
        "Estudiantes": []
    },
    {
        "Tipo": "Fechas",
        "Fechas": [
            {
                "FehcaInicio": "00-00-0000",
                "FehcaFinal": "00-00-0000"
            }
        ]
    },
    {
        "Tipo": "Grupos",
        "Grupos": [
            {
                "GrupoT1": []
            },
            {
                "GrupoT2": []
            },
            {
                "GrupoT3": []
            },
            {
                "GrupoT4": []
            },
            {
                "GrupoT5": []
            },
            {
                "GrupoT6": []
            },
            {
                "GrupoT7": []
            }
        ]
    },
    {
        "Tipo": "Rutas",
        "Rutas": [
            {
                "Java": [
                    {
                        "FundamentosProgramacion": [
                            "Pseint",
                            "Python",
                            "Introduccion a la algoritmia"
                        ]
                    },
                    {
                        "ProgramacionWeb": [
                            "HTML",
                            "CSS",
                            "BootStrap"
                        ]
                    },
                    {
                        "ProgramacionFormal": [
                            "Java"
                        ]
                    },
                    {
                        "BaseDatos": [
                            "Mysql",
                            "MongoDb"
                        ]
                    },
                    {
                        "Backend": [
                            "Node"
                        ]
                    }
                ]
            },
            {
                "NetCore": [
                    {
                        "FundamentosProgramacion": [
                            "Pseint",
                            "Python",
                            "Introduccion a la algoritmia"
                        ]
                    },
                    {
                        "ProgramacionWeb": [
                            "HTML",
                            "CSS",
                            "BootStrap"
                        ]
                    },
                    {
                        "ProgramacionFormal": [
                            "C#"
                        ]
                    },
                    {
                        "BaseDatos": [
                            "Mysql",
                            "MongoDb"
                        ]
                    },
                    {
                        "Backend": [
                            "NetCore"
                        ]
                    }
                ]
            },
            {
                "NodeJS": [
                    {
                        "FundamentosProgramacion": [
                            "Pseint",
                            "Python",
                            "Introduccion a la algoritmia"
                        ]
                    },
                    {
                        "ProgramacionWeb": [
                            "HTML",
                            "CSS",
                            "BootStrap"
                        ]
                    },
                    {
                        "ProgramacionFormal": [
                            "JavaScript"
                        ]
                    },
                    {
                        "BaseDatos": [
                            "Mysql",
                            "MongoDb"
                        ]
                    },
                    {
                        "Backend": [
                            "Node"
                        ]
                    }
                ]
            }
        ]
    },
    {
        "Tipo": "NombresRutas",
        "NombresRutas": [
            "Java",
            "NetCore",
            "NoteJS"
        ]
    },
    {
        "Tipo": "EstudiantesAprobaronPruebaInicial",
        "EstudiantesAprobaronPruebaInicial": []
    },
    {
        "Tipo": "RiesgoAlto",
        "RendimientoBajo": []
    },
    {
        "Tipo": "Notas",
        "Notas": []
    },
    {
        "Tipo": "RegitroEntrada",
        "RegistroEntrada": [
            {
                
            }
        ]
    }
]`

console.log("¿Cual es su rol dentro de CampusLands?\n 1. Camper\n 2. Trainer\n 3. Coordinador")
var console =prompt()
if (console==1){
    
}

