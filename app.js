
const argv = require('./config/yargs').argv;
var colors = require('colors');

const { crearArchivo, listar } = require('./multiplicar/multiplicar');

// console.log('limite :', argv.limite);

// let argv2 = process.argv;
// let parametro = argv[2];
// let base = parametro.split('=')[1];

let comando = argv._[0];

switch (comando) {
    case 'listar':
        listar(argv.base, argv.limite)
            .then( lista => console.log(lista))
            .catch( e => console.log(e));
        break;
    
    case 'crear':  
        crearArchivo( argv.base, argv.limite )
            .then( archivo => console.log(`Archivo creado: ${archivo.green}`))
            .catch( e => console.log(e));
        break;

    default:
        console.log(`"${comando}" Comando no recnocido`);
}


