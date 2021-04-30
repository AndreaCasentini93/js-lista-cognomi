// 1. ask the user for their surname
var userSurname = prompt("Write your surname, please.");

// 2. insert it in an array with other surnames: 'Bianchi', 'Neri', 'Rossi', 'Verdi', 'Gialli'
var surnameList = ["Bianchi", "Neri", "Rossi", "Verdi", "Gialli"];

surnameList.push(userSurname);

// 3. print the list sorted alphabetically
surnameList.sort();

var surnameListUl = document.getElementById("surname_list");

for (var i=0 ; i < surnameList.length ; i++) {
    surnameListUl.innerHTML += "<li>" + surnameList[i] + "</li>";
}

// 4. scrivi anche la posizione "umana" (partendo da 1) della lista in cui il nuovo utente si trova

var surnamePositionP = document.getElementById("user_surname_position");
var surnamePosition = 0;

var test = true;

i = 0
while ((i < surnameList.length) && (test == false)) {
    

    i++;
}