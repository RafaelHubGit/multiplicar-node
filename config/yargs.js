
const opt = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l', 
        default: 10
    }
}
const argv = require('yargs')
                .command('listar', 'Imprime en consola la tbl de multiplicar ', opt)
                .command('crear', 'Crea un txt con las tablas', opt)
                .help()
                .argv;


module.exports = {
    argv
}