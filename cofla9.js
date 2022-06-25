let materias = {
    computacion: ["perez","tizi","santi","martin"],
    programacion: ["dalto","tizi","santi","maximusprime"],
    diseño:["joumes","martin","maximusprime"],
    medico: ["rodriguez","juan","maximusprime"]
}

const inscribir = (alumno,materia) => {
    let personas = materias[materia];
    if (personas.length >= 21) {
        document.write(`lo siento ${alumno} la clase de ${materia} ya esta llena.<br><br>`);/*  */
    }
    else {
        personas.push(alumno);
        if (materia == "computacion") {
            materias = {
                computacion: personas,
                programacion: materias["programacion"],
                diseño: materias["diseño"],
                medico: materias["computacion"]
            } 
        }
        else if (materia == "programacion") {
            materias = {
                computacion: materias["computacion"],
                programacion: personas,
                diseño: materias["diseño"],
                medico: materias["computacion"]
            } 
        }
        else if (materia == "diseño") {
            materias = {
                computacion: materias["computacion"],
                programacion: materias["programacion"],
                diseño: personas,
                medico: materias["computacion"]
            } 
        }
        else if (materia == "medico") {
            materias = {
                computacion: materias["computacion"],
                programacion: materias["programacion"],
                diseño: materias["diseño"],
                medico: personas
            } 
        }
        document.write(`felicidades ${alumno}, te has inscripto a la clase de ${materia}<br><br>`);
    }
}
document.write( `alumnos inscriptos ${materias["medico"]}<br><br>`)

inscribir("maria","medico")
inscribir("juan","medico")
inscribir("pepe","medico")
inscribir("felipe","medico")
inscribir("maria","medico")
inscribir("juan","medico")
inscribir("pepe","medico")
inscribir("felipe","medico")
inscribir("maria","medico")
inscribir("juan","medico")
inscribir("pepe","medico")
inscribir("felipe","medico")
inscribir("maria","medico")
inscribir("juan","medico")
inscribir("pepe","medico")
inscribir("felipe","medico")
inscribir("maria","medico")
inscribir("juan","medico")
inscribir("pepe","medico")
inscribir("felipe","medico")
inscribir("maria","medico")
inscribir("juan","medico")
inscribir("pepe","medico")
inscribir("felipe","medico")
inscribir("maria","medico")
inscribir("juan","medico")
inscribir("pepe","medico")
inscribir("felipe","medico")
inscribir("maria","medico")
inscribir("juan","medico")
inscribir("pepe","medico")
inscribir("felipe","medico")
document.write( `nuevos alumnos inscriptos ${materias["medico"]}`)