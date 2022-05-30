var alumnos = [{
        nombre: 'Juan Gomez',
        nota: 7
    }, {
        nombre: 'Pedro Rodriguez',
        nota: 4
    }, {
        nombre: 'Roxana García',
        nota: 8
    }, {
        nombre: 'Luciano Lopez',
        nota: 5
    }, {
        nombre: 'Fernanda Gimenez',
        nota: 6
    }, {
        nombre: 'Florencia Martinez',
        nota: 10
    }, {
        nombre: 'Raul Sanchez',
        nota: 7
    }, {
        nombre: 'Sandra Figueroa',
        nota: 8
    }
];

function listar(alumnos) {
    let lista = ""
    alumnos.forEach(e => {
        lista += e.nota + " - " + e.nombre + "\n"
        
    });

    return lista
}

function mostrarAlumnos(alumnos) {
    document.querySelector("#todos").innerText = listar(alumnos)
}

function mostrarAprobados() {
    document.querySelector("#aprobados").innerText = listar(alumnos.filter(alum => alum.nota >= 7))
}

mostrarAlumnos(alumnos)
mostrarAprobados(alumnos)