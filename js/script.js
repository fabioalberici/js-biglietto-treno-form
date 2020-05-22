// bottoni
var btnGenera = document.getElementById('btn-genera');
var btnAnnulla = document.getElementById('btn-annulla');
// input nomi km ed età
var inputNome = document.getElementById('nome');
var inputKm = document.getElementById('km');
var inputEta = document.getElementById('eta');




// biglietto nome km ed età
var biglNome = document.getElementById('nome-biglietto');
var biglOfferta = document.getElementById ('offerta-biglietto');
var biglCosto = document.getElementById ('costo-biglietto');

//click Genera
btnGenera.addEventListener('click',
// costo e genera biglietto
function () {
  biglNome.innerHTML = inputNome.value;
  var km = parseInt(inputKm.value);
  var eta = inputEta.value;

  // calcolo costo del biglietto
  var prezzo = km * 0.21;
  var offerta = 'Biglietto Standard';
  // calcolo eventuali sconti
  if (eta == 'minorenne') {
    prezzo = prezzo - (prezzo * 20 / 100 );
    offerta = 'minorenne';
  } else if (eta == 'over') {
    prezzo = prezzo - (prezzo * 40 / 100 );
    offerta = 'over 65';
  }
  biglCosto.innerHTML = prezzo.toFixed(2) + 'euro';
  biglOfferta.innerHTML = offerta;
}

)

// click annulla
btnAnnulla.addEventListener('click',
// reset form
function () {
  inputNome.value = '';
  inputKm.value = '';
// reset biglietto
  biglNome.innerHTML = '';

}

)
