const cepInput = document.querySelector('#cep_input');

var oldCepInputValue = cepInput.value;
onValueChange = () => {
    let newCepInputValue = cepInput.value;
    if(newCepInputValue != oldCepInputValue){

        if(newCepInputValue.length === 8){
            fetch('http://viacep.com.br/ws/'+newCepInputValue+'/json/')
            .then(resp => resp.json())
            .then(data => {
                console.log(data);
                if(!data.erro){
                    document.getElementById('city_input').value = data.localidade;
                    document.getElementById('street_input').value = data.logradouro;
                    document.getElementById('uf_input').value = data.uf;
                }
            });
        }
        oldCepInputValue = newCepInputValue;
    }
    
};


 onCepInputKeyDown = () => {
    if(cepInput.value.length > 8){
        cepInput.value = cepInput.value.slice(0, 8);
    }
        


} 