const criarUsuario = require('./usuario')

test('Deve criar um usario com nome e idade', ()=>{

    const usuario = criarUsuario('João',30);

       expect(usuario).toEqual({

        nome: 'João',

        idade: 30

       });

    });
