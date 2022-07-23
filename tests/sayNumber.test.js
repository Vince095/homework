const sayNumber = require('../sayNumber')

test("property displays the number inserted in English", ()=>{
    expect(sayNumber(0)).toBe('zero.')
    expect(sayNumber(11)).toBe('Eleven .')
    expect(sayNumber(14)).toBe('Fourteen .')
    expect(sayNumber(15)).toBe('Fifteen .')
    expect(sayNumber(43)).toBe('Forty three .')
    expect(sayNumber(50)).toBe('Fifty.')
    expect(sayNumber(20000)).toBe('Twenty thousand.')
    expect(sayNumber(1033286)).toBe('One  million, thirty three  thousand, two hundred and eighty six .')
    expect(sayNumber(12000013)).toBe('Twelve  million, thirteen .')
    expect(sayNumber(90376000010012)).toBe('Ninety trillion three hundred and seventy six  billion, ten  thousand, twelve .')
   })