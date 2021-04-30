// VARIABILI GET ELEMENT BY ID
var userSurnameInput = document.getElementById("user_surname");
var surnamePositionP = document.getElementById("user_surname_position");
var surnamesListOl = document.getElementById("surnames_list");


// LISTA COGNOMI
var surnamesList = ["Rossi", "Ferrari", "Russo", "Bianchi", "Gallo", "Costa", "Fontana", "Conti", "Esposito", "Ricci", "De Luca", "Greco", "Barbieri", "Conte", "Marini", "Gatti", "Caruso"];

// STAMPA LISTA COGNOMI IN ORDINE ALFABETICO
surnamesList.sort();

for (var i = 0 ; i < surnamesList.length ; i++) {
    surnamesListOl.innerHTML += "<li>" + surnamesList[i] + "</li>";
}

// FUNZIONE CALCOLATORE
var doubleClick = true;

function calculator() {

    // CHIEDI ALL'UTENTE IL SUO COGNOME
    var userSurname = userSurnameInput.value;

    // CALCOLATORE FUNZIONA SOLO SE IL COGNOME UTENTE E' COMPOSTO DA LETTERE
    if(!(userSurname.trim() == "" || !isNaN(parseInt(userSurname)) && typeof parseInt(userSurname) == 'number')) {

        // RESET DELLA LISTA COGNOMI
        surnamesListOl.innerHTML = "";

        // TRASFORMA IN MAIUSCOLA LA PRIMA LETTERA DEL COGNOME UTENTE
        var userSurname = userSurname[0].toUpperCase() + userSurname.substring(1);

        // INSERISCI IL COGNOME DELL'UTENTE NELLA LISTA
        surnamesList.push(userSurname);

        // STAMPA LA LISTA IN ORDINE ALFABETICO
        surnamesList.sort();

        for (var i=0 ; i < surnamesList.length ; i++) {
            surnamesListOl.innerHTML += "<li>" + surnamesList[i] + "</li>";
        }

        // SPECIFICA LA POSIZIONE NUMERICA DEL COGNOME UTENTE NELLA LISTA
        var surnamePosition = 1;

        var test = true;

        i = 0
        while ((i < surnamesList.length) && (test)) {
            
            if (userSurname == surnamesList[i]) {
                surnamePosition += i;
                test = false;
            }

            i++;
        }

        surnamePositionP.innerHTML = "<span id=\"message\">" + "Your surname has position number " + surnamePosition + " in the surnames list." + "</span>";
        
        // PULISCI L'INPUT TEXT
        userSurnameInput.value = "";

        // BLOCCA IL DOPPIO CLICK DEL PULSANTE
        doubleClick = false;

    } else {

        // MESSAGGIO DI ERRORE
        surnamePositionP.innerHTML = "The surname entered is not valid, please try again.";

        // PULISCI L'INPUT TEXT
        userSurnameInput.value = "";

        // BLOCCA IL DOPPIO CLICK DEL PULSANTE
        doubleClick = false;

    }

}

// FUNZIONE RESET
function reset() {

    if (!doubleClick) {

        // LISTA COGNOMI
        surnamesList = ["Rossi", "Ferrari", "Russo", "Bianchi", "Gallo", "Costa", "Fontana", "Conti", "Esposito", "Ricci", "De Luca", "Greco", "Barbieri", "Conte", "Marini", "Gatti", "Caruso"];

        // STAMPA LISTA COGNOMI IN ORDINE ALFABETICO
        surnamesList.sort();

        surnamesListOl.innerHTML= "";
        for (var i = 0 ; i < surnamesList.length ; i++) {
            surnamesListOl.innerHTML += "<li>" + surnamesList[i] + "</li>";
        }

        // RIMUOVI LA POSIZIONE NUMERICA DEL COGNOME UTENTE NELLA LISTA
        surnamePositionP.innerHTML = "";

        // PULISCI L'INPUT TEXT
        userSurnameInput.value = "";

        // SBLOCCA IL DOPPIO CLICK DEL PULSANTE
        doubleClick = true;

    }

}