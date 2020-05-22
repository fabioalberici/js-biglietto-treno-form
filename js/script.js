// bottoni
var btnGenera = document.getElementById('btn-genera');
var btnAnnulla = document.getElementById('btn-annulla');
// input nomi km ed età
var inputNome = document.getElementById('nome');
var inputKm = document.getElementById('km');
var inputEta = document.getElementById('eta');




// biglietto nome km ed età
var biglNome = document.getElementById('nome');


//click Genera
btnGenera.addEventListener('click',
// costo e genera biglietto
function () {
  biglNome.innerHTML = inputNome.value;
}

)

// click annulla
btnAnnulla.addEventListener('click',
// reset form
function () {
  inputNome.value = '';
// reset biglietto
  biglNome.innerHTML = '';
}

)
