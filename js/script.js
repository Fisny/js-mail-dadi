alert('controlla la email di ugo@gmail.com')
alert('controlla la email di dario@gmail.com')

var userMail = prompt("inserisci la mail");

var registrati = ['dario@gmail.com', 'davide@gmail.com', 'luca@gmail.com'];
var trovata = false;

for (var i = 0; i < registrati.length; i++ )
{
  if (userMail === registrati[i] )
    trovata = true;
}

if (trovata === false)
    document.getElementById('output').innerHTML = ("non ho trovato la mail");
if (trovata === true)
    document.getElementById('output').innerHTML = ("ho trovato la mail");