function valorIni() {
    Swal.fire({
        title: 'Informe o valor inicial:',
        input: 'text',
        inputAttributes: {
            autocapitalize: 'off'
        },
        confirmButtonText: 'Enviar',
        showLoaderOnConfirm: true,
        allowOutsideClick: () => !Swal.isLoading()
    }).then((result) => {
        let valorInicial = parseFloat(result.value);
        if (isNaN(valorInicial) || valorInicial < 0) {
            valorInicial = 0.00;
        }
        document.getElementById("atual").innerHTML = valorInicial.toFixed(2);
    });
}



function depositar() {
    var valor = parseFloat(document.getElementById("valor").value);
    var atual = parseFloat(document.getElementById("atual").innerHTML);

    if (valor <= 0 || isNaN(valor)) {
        Swal.fire({
            icon: "error",
            title: "Valor Inválido!",
          });
        return;
    } else {
        document.getElementById("atual").innerHTML = (valor + atual);
        document.getElementById("valor").value = "";
        var dataHora = new Date();
        var dia = dataHora.getDate() + '/' + (dataHora.getMonth()+1) + '/' + dataHora.getFullYear();
        var hora = dataHora.getHours() + ':' + dataHora.getMinutes() + ':' + dataHora.getSeconds();
        document.getElementById("historico").innerHTML += "<span class='deposito'>Deposito: R$" + valor + " no dia " + dia + " as " + hora + "<br></span>";
    }

    
}

function sacar () {
    var valor = parseFloat(document.getElementById("valor").value);
    var atual = parseFloat(document.getElementById("atual").innerHTML);


    if (valor > atual || isNaN(valor) || valor <= 0) {
        Swal.fire({
            icon: "error",
            title: "Valor Insuficiente ou Inválido!",
          });
        return;
    } else { 
        document.getElementById("atual").innerHTML = (atual - valor);
        document.getElementById("valor").value = "";

        var dataHora = new Date();
        var dia = dataHora.getDate() + '/' + (dataHora.getMonth()+1) + '/' + dataHora.getFullYear();
        var hora = dataHora.getHours() + ':' + dataHora.getMinutes() + ':' + dataHora.getSeconds();
        document.getElementById("historico").innerHTML += "<span class='saque'>Saque: R$" + valor + " no dia " + dia + " as " + hora + "<br></span>";
        
    }
}