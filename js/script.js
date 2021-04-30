// LISTA COGNOMI
var surnamesList = ["Rossi", "Ferrari", "Russo", "Bianchi", "Gallo", "Costa", "Fontana", "Conti", "Esposito", "Ricci", "De Luca", "Greco", "Barbieri", "Conte", "Marini", "Gatti", "Caruso"];

// STAMPA LISTA COGNOMI IN ORDINE ALFABETICO
surnamesList.sort();

var surnamesListOl = document.getElementById("surnames_list");
for (var i = 0 ; i < surnamesList.length ; i++) {
    surnamesListOl.innerHTML += "<li>" + surnamesList[i] + "</li>";
}

// FUNZIONE CALCOLATORE
var doubleClick = true;

function calculator() {

    if (doubleClick) {

        // RESET DELLA LISTA COGNOMI
        surnamesListOl.innerHTML = "";

        // CHIEDI ALL'UTENTE IL SUO COGNOME
        var userSurnameInput = document.getElementById("user_surname");
        var userSurname = userSurnameInput.value;
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

        var surnamePositionP = document.getElementById("user_surname_position");
        surnamePositionP.innerHTML = "Your surname has position number " + surnamePosition + " in the surnames list.";

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

        var surnamesListOl = document.getElementById("surnames_list");
        surnamesListOl.innerHTML= "";
        for (var i = 0 ; i < surnamesList.length ; i++) {
            surnamesListOl.innerHTML += "<li>" + surnamesList[i] + "</li>";
        }

        // RIMUOVI LA POSIZIONE NUMERICA DEL COGNOME UTENTE NELLA LISTA
        var surnamePositionP = document.getElementById("user_surname_position");
        surnamePositionP.innerHTML = "";

        // PULISCI L'INPUT TEXT
        var userSurnameInput = document.getElementById("user_surname");
        userSurnameInput.value = "";

        // SBLOCCA IL DOPPIO CLICK DEL PULSANTE
        doubleClick = true;

    }

}