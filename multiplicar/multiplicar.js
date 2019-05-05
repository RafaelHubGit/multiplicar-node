

// requireds
const fs = require('fs');
var colors = require('colors');

let crearArchivo = ( base, limite ) => {

    return new Promise( (resolve, reject) =>{

        if( !Number (base) || !Number(limite)){
            reject (`El valor, no es un numero`);
            return;
        }

        let data = '';

        for(let x = 1; x <= limite; x++){
            data += (`${base} X ${x} = ${base * x}\n`);
        }


        fs.writeFile(`tablas/tabla-${base}.txt`, data , (err) => {
        if (err) 
            reject(err)
        else
            resolve (`tabla-${base}.txt`);
        })
    })
}

let listar = (base, limite = 10) => {

    console.log('============================'.green);
    console.log(`=======tabla de ${base}=======`.green);
    console.log('============================'.green);

    return new Promise( (resolve, reject) => {

        if(!Number(base) || !Number(limite)){
            reject (`Parametros no validos`);
            return;
        }

        let data = '';

        for(let x = 1; x <= limite; x++){
            data += (`${base} X ${x} = ${base * x}\n`);
        }

        resolve (data);

    })
}

module.exports = {
    crearArchivo, 
    listar
}