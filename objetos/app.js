const alumno = {
    nombre: 'Francisco',
    primerApellido: 'Martinez',
    segundoApellido: 'Diaz',
    numeroContacto: [5559587305, 5544679844],
    numeroCuenta: 4457899277894002,
    actividadesPersonales: {
        lectuta: 'hail mary',
        fisica: 'correr',
        actividadCotidiana(actvidad){
            return alumno.nombre + ' hace la actividad de ' + actvidad
        }
    },
    educacion: {
        kinder: {
            nombre: "los patitos",
            concluido: true,
            tituloObtendido: 'certificado'
        },
        primaria: {
            nombre: "Dr Atl",
            concluido: true,
            tituloObtendido: 'certificado'
        },
        secundaria: {
            nombre: "Sec. Tecnica Ramon Valdez",
            concluido: true,
            tituloObtendido: 'certificado'
        },
        bachillerato: {
            nombre: "preparatoria anexa a la normal de ecatepec",
            concluido: true,
            tituloObtendido: 'certificado'
        },
        carrera: {
            nombre: "Ingenieria en computacion",
            concluido: false,
            tituloObtendido: ''}

    },
    direccion: {
        colonia: "granjas de san cristobal",
        calle: "los portales",
        numeroExt: 78,
        numeroInt: NaN,
        ciudad: 'coacalco',
        estado: 'estado de mexico',
        pais: 'mexico',
        codigoPostal: 55726
    }
};

// leer
console.log(alumno.educacion.primaria);
console.log(alumno['nombre']);

// crear
alumno.numeroCuenta = 404228921;
console.log(alumno)

// actualizar
alumno.segundoApellido = 'Lopez';
alumno.nombre = 'eduardo';
console.log(alumno)

// eliminar
delete alumno.segundoApellido;
console.log(alumno)