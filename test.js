test("Un Euros debería ser 1.07 Dólares", function() {
    const { fromEuroToDollar } = require('./app.js');
  
    const dollars = fromEuroToDollar(3.5);
    const expected = 3.5 * 1.07;
    expect(fromEuroToDollar(3.5)).toBe(3.745);
  })
  
  test('Un Dólar debería ser 149.42 Yenes', function (){
    const { fromDollarToYen } = require('./app.js');
  
    const yenes = fromDollarToYen(4);
    const expected = 4 * 156.5;
    expect(fromDollarToYen(4)).toBe(626);
  })
  
  test('Un Yen debería ser 0.0052 Libras Británica', function (){
    const { fromYenToPound } = require('./app.js');
  
    const librasBritanica = fromYenToPound(1540);
    const expected = 1540 * 0.87;
    console.log(expected)
    expect(fromYenToPound(1540)).toBe(1339.8);
  })