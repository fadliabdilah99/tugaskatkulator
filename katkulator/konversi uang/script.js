
const convertCurrency = () => {
  const uangRupiah = parseFloat(document.getElementById('rupiahInput').value);
  
  const dolarAS = uangRupiah * 0.000067;
  const dolarSingapur = uangRupiah * 0.000090;
  const yuan = uangRupiah * 48043.53;

  document.getElementById('output').innerHTML = `Dolar AS: ${dolarAS}<br>
                                                  Dolar SG: ${dolarSingapur}<br>
                                                  Yuan: ${yuan}`;
}