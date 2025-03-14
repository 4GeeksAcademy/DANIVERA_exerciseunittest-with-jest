
function fromEuroToDollar (montoEURO){
    let USDmonto = montoEURO * 1.07;
    return USDmonto;
  }
  function fromDollarToYen (montoUSD){
    let YENmonto = montoUSD * 156.5;
    return YENmonto;
  }
  function fromYenToPound (montoYEN){
    let POUND = montoYEN * 0.87;
    return POUND;
  }
  
  module.exports = {fromDollarToYen, fromEuroToDollar, fromYenToPound}