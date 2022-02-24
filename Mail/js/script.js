let userMail = prompt("Qual è la tua mail?");

let emailFound = false;

let arrMail = ["john@mail.it", "gabriel@mail.it", "mauro@mail.it", "henri@mail.it", "chiara@mail.it"]


for (index = 0; index < arrMail.length; index++){
    if(arrMail[index] == userMail){
        emailFound = true;
    }

    if (emailFound){
        document.getElementById(`mail`).innerHTML = `${userMail}, puoi accedere`;
    } else{
        document.getElementById(`mail`).innerHTML = `${userMail}, non puoi accedere`;
    }
}






