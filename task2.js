
function getFormvalue () {
    let firstName = document.getElementById("form1").elements["fname"].value;
    let lastName = document.getElementById("form1").elements["lname"].value;


    console.log ("Nombre: " + firstName);
    console.log ("Apellido: " + lastName);
}