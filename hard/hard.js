//// Scratchpad ////

// function pii(name, ssn) {
//     return {
//         getName: function() {
//             return name;
//         },
//         getSSN: function() {
//             return ssn;
//         }
//     }
// }
// const patient1 = pii('Jane Doe', '123-45-6789');
// const patient2 = pii('John Doe', '987-65-4321');
// console.log(patient1.getName());
// console.log(patient1.getSSN());
// console.log(patient2.getName());
// console.log(patient2.getSSN());

// function pii(name) {
//     let ssn; // private variable
//     return {
//         getName() {
//             return name;
//         },
//         getSSN() {
//             return ssn;
//         },
//         setSSN(assignedSsn) { // have to create a function to assign private ssn variable
//             ssn = assignedSsn;
//         }
//     }
// }

// function pii(name, ssn) {
//     const pii = {
//         name: name,
//         ssn: ssn
//     }

//     return {
//         getName: function () {
//             return pii.name;
//         },
//         getSSN: function () {
//             return pii.ssn;
//         }
//     }
// }
// const patient1 = pii('Jane Doe', '123-45-6789');
// const patient2 = pii('John Doe', '987-65-4321');
// console.log(patient1.names);
// console.log(patient1.ssn);
// console.log(patient1.getName());
// console.log(patient1.getSSN());
// console.log(patient2.getName());
// console.log(patient2.getSSN());

//// End of Scratchpad ////

///// Hard JS /////
let data = [];
const submitTab = document.getElementById('submit-tab');
const retrieveTab = document.getElementById('retrieve-tab');

submitTab.addEventListener('click', function () {

})

const fullname = document.getElementById('fullname');
const ssn = document.getElementById('ssn');
const submitBtn = document.getElementById('submit');

fullname.addEventListener('input', function () {

})

////////// Challenge //////////
function pii(name) {
    const PII = {
        name: name,
        ssn: null // have to give default value in order to be considered declared
    }
    return {
        setSSN(assignedSSN) {
            PII.ssn = assignedSSN;
        },
        getName() {
            return PII.name;
        },
        getSSN() {
            return PII.ssn;
        }
    }
}
const patient1 = pii('Jane Doe');
patient1.setSSN('123-45-6789'); // why does this work but...
// pii('Jane Doe').setSSN('123-45-6789'); //not this one? => because creating a new instance everytime function is called
console.log(patient1.getName());
console.log(patient1.getSSN());
console.log(patient1.names); // returns undefined
console.log(patient1.ssn); // returns undefined

const patient2 = pii('John Doe');
patient2.setSSN('987-65-4321');
console.log(patient2.getName());
console.log(patient2.getSSN());