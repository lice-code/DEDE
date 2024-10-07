const somarNumeros = require('./script')

test('soma 1 + 2 deve ser giual a 3', ()=> {
    expect(somarNumeros(1, 2)).toBe(3);
});