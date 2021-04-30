// USER SURNAME REQUEST
var userSurname = prompt("Write your surname, please.");
var userSurname = userSurname[0].toUpperCase() + userSurname.substring(1);

// USER SURNAME IN [SURNAMES LIST] ARRAY
var surnamesList = ["Rossi", "Ferrari", "Russo", "Bianchi", "Gallo", "Costa", "Fontana", "Conti", "Esposito", "Ricci", "De Luca", "Greco", "Barbieri", "Conte", "Marini", "Gatti", "Caruso"];

surnamesList.push(userSurname);

// PRINT OF THE ORDERED [SURNAMES LIST]
surnamesList.sort();

var surnamesListOl = document.getElementById("surnames_list");

for (var i=0 ; i < surnamesList.length ; i++) {
    surnamesListOl.innerHTML += "<li> " + surnamesList[i] + "</li>";
}

// USER'S SURNAME POSITION IN THE [SURNAMES LIST]
var surnamePositionP = document.getElementById("user_surname_position");
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

surnamePositionP.innerHTML = "Your surname has position number " + surnamePosition + " in the surnames list";