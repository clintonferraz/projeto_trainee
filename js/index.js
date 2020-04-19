fetch('https://covidgoias.ufg.br/service/summary/data?cd_geocmu=52&lang=pt-br')
.then(response => {
    if (response.ok === true){
        document.querySelector('.section-b').style.display = 'block';
    }
    return response.json();
})
.then(data => {
    document.querySelector('#suspeitos').innerHTML = data.resumed.suspeitos;
    document.querySelector('#confirmados').innerHTML = data.resumed.confirmados;
    document.querySelector('#obitos').innerHTML = data.resumed.obitos;
    document.querySelector('#lastUpdate').innerHTML = data.last_update.data;

});
   





