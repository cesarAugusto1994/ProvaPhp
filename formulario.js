/**
 * Created by cesar on 23/06/17.
 */


function calculateAge(dobString) {
    var dob = new Date(dobString);
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    var birthdayThisYear = new Date(currentYear, dob.getMonth(), dob.getDate());
    var age = currentYear - dob.getFullYear();
    if(birthdayThisYear > currentDate) {
        age--;
    }
    return age;
}

function calcular() {

    if ($("[name='nascimento']").val() == false) {
        return false;
    }

    var data = $("[name='nascimento']").val();
    var partes = data.split("/");
    var junta = partes[2]+"-"+partes[1]+"-"+partes[0];
    $("[name='idade']").val((calculateAge(junta)));
}

function validarCampo(campos) {

    $.each(campos, function (index, element) {

        if (!element.val()) {
            alert('O campo ' + index  + ' deve ser informado.');
            element.focus();
            return false;
        }

        switch (element[0].name) {
            case 'nome' :
                if (element.val().length < 3 || element.val().length > 20) {
                    alert('Seu nome deve conter de 3 à 20 caracteres.');
                    element.focus();
                    return false;
                }
                break;
            case 'nascimento' :

                var filterData = /^[0-9]{2}\/[0-9]{2}\/[0-9]{4}$/;
                if(!filterData.test(element.val())){
                    alert("Digite a data no formato Dia/Mês/Ano");
                    element.focus();
                    return false;
                }

                break;
            case 'sexo' :

                if ($.inArray(element.val(), ["M", "F"])) {
                    alert('O Sexo informado é inválido.');
                    element.focus();
                    return false;
                }

                break;
            case 'email' :

                var filter = /^([a-z0-9_\.\-])+\@(([a-z0-9\-])+\.)+([a-z0-9]{2,4})+$/;
                if (!filter.test(element.val())) {
                    alert('Por favor, informe um email válido.');
                    element.focus();
                    return false;
                }

        }

    })
}

function validarFormulario(e) {

    e.preventDefault();

    var nome = $("[name='nome']");
    var nascimento = $("[name='nascimento']");
    var sexo = $("[name='sexo']");
    var email = $("[name='email']");

    campos = {
        'Nome': nome, 'Data Nascimento': nascimento, 'Sexo': sexo, 'E-mail': email
    };

    validarCampo(campos);

}

$(document).ready(function () {
    $('form').submit(validarFormulario)
})