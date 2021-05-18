const buttonCount = document.getElementById('button');
const result = document.getElementById('result');

buttonCount.addEventListener('click', () => {
    const initial = document.getElementById('start').value;
    const end = document.getElementById('end').value;
    let step = Number(document.getElementById('step').value);

    if (initial.length == "" || end.length == "")
        result.innerHTML = "Impossível contar!";
    else {

        if (step <= 0) {
            alert("Passo inválido!🛑 Considerando PASSO 1");
            step = 1;
        }

        const initialize = Number(initial);
        const final = Number(end);

        account({initialize, final, step});
    }


});

function account(value){
    const { initialize, final, step } = value;
    
    result.innerHTML = 'Contador: <br/>';

    if(initialize <= final){
        for (let index = initialize; index <= final; index+=step)
            result.append(index, ' 👉🏼 ');
        
    }else {
        for (let index = initialize; index >= final ; index-=step)
            result.append(index, ' 👉🏼 ');
    }
    result.append(' 🏁');

}
