const calculadora = require("./calculadora2")

test('teste de funcionalidade soma', () => {
  expect(calculadora("+" , [1, 2, 3])).toBe(6);
})

test('teste de funcionalidade soma', () => {
    expect(calculadora("z" , [1, 2, 3])).toBeUndefined();
  })

  test('teste de funcionalidade soma', () => {
    expect(calculadora("-" , [1, 2, 3])).not.toBe(4);
  })

  test('teste de funcionalidade soma', () => {
    expect(calculadora("/" , [1, 2, 3])).not.toBe(6);
  })

  test('teste de funcionalidade soma', () => {
    expect(calculadora("*" , [1, 2, 3])).not.toBe(6);
  })

  test('teste de funcionalidade soma', () => {
    expect(calculadora("+" , [56, 6.8, 90])).toBe(152.8);
  })
  
  test('teste de funcionalidade soma', () => {
    expect(calculadora("+" , [2.2, 2.2, 30])).not.toBe(6);
  })

