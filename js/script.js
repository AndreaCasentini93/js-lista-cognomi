// USER SURNAME REQUEST
var userSurname = prompt("Write your surname, please.");

// USER SURNAME IN [SURNAMES LIST] ARRAY
var surnamesList = ["Bianchi", "Neri", "Rossi", "Verdi", "Gialli"];

surnamesList.push(userSurname);

// PRINT OF THE ORDERED [SURNAMES LIST]
surnamesList.sort();

var surnamesListUl = document.getElementById("surnames_list");

for (var i=0 ; i < surnamesList.length ; i++) {
    surnamesListUl.innerHTML += "<li>" + surnamesList[i] + "</li>";
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