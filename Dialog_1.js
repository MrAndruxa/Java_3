var person = {
     "SNILS 1": ["Ivanov",  "Ivan", "Ivanovitch", 15, "May", 1974, "M", "Yes"],
     "SNILS 2": ["Fedorov", "Andrey", "Viktorovitch", 24, "June", 2002, "M", "No"],
     "SNILS 3": ["Kolpakov", "Mikhail", "Nikolaevitch", 20, "November", 2001, "M", "Else"],
};
// console.log(person)
let SNILS
var FirstFunction = function (person,SNILS) {
SNILS = prompt("Wtite pazient's SNILS", SNILS)
infoname = person[SNILS]
// console.log(infoname)
alert("Info about pazient", + infoname)
StatusVacc = person[SNILS][7];
console.log(StatusVacc)
}
FirstFunction(person, SNILS)
// Information about vaccination status
var SecondFunction = function (StatusVacc, infoname) {
// Changings
if (StatusVacc === "Yes") {
alert("Vacccination denied" + infoname);
} else if (StatusVacc === "No") {
alert("Vaccination allowed" + infoname);
} else if (StatusVacc === "Else") {
alert("Vaccination denied" + infoname)
}       
}
ForSecond = FirstFunction(person, SNILS)
SecondFunction(StatusVacc, infoname)
//ENding work with this windows
while (confirm("Continue work with windows")) {
ForSecond = FirstFunction(person, SNILS)
SecondFunction(StatusVacc, infoname)
}
console.log("End working.");