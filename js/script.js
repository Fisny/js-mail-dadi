var registrati = ['dario@gmail.com', 'luca@gmail.com', 'pippo@gmail.com'];
var userMail = prompt('Inserici la tua E-mail');

for (var i = 0; i < registrati.length; i++) {
    if (registrati[i] === 'bardi@gmail.com') {
        check = true;
        break;
    }
}

var check = false;

if (check) {
    output.innerHTML += 'Ti ho trovato nella lista!';
} else {
    output.innerHTML += 'Non ti ho trovato nella lista!';
}