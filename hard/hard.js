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
//// Disclaimer: The JS for the UI is not complete /////
const inputContainer = document.getElementById('input-container');
const retrieveContainer = document.getElementById('retrieve-container');
const submitTab = document.getElementById('submit-tab');
const retrieveTab = document.getElementById('retrieve-tab');
const backBtn = document.getElementById('back-submit');

let data = [];
const fullname = document.getElementById('fullname');
const ssn = document.getElementById('ssn');
const invalidNotif = document.getElementById('hard-invalid');
const submitBtn = document.getElementById('submit');
const overlay = document.getElementById('overlay');
const emptyNameModal = document.getElementById('name-modal');
const cancelBtn = document.getElementById('cancel');
const continueBtn = document.getElementById('continue');
const dataTable = document.getElementById('data-table')

submitTab.addEventListener('click', function () {
    inputContainer.style.display = 'flex';
    retrieveContainer.style.display = 'none';
    fullname.value = '';
    ssn.value = '';
    ssn.classList.remove('invalid');
    invalidNotif.style.display = 'none';
})

retrieveTab.addEventListener('click', function () {
    inputContainer.style.display = 'none';
    retrieveContainer.style.display = 'flex';
})

backBtn.addEventListener('click', function () {
    inputContainer.style.display = 'flex';
    retrieveContainer.style.display = 'none';
    fullname.value = '';
    ssn.value = '';
    ssn.classList.remove('invalid');
    invalidNotif.style.display = 'none';
})

let ssnExist = false;
submitBtn.addEventListener('click', (event) => {
    event.preventDefault();
    const fullnameValue = fullname.value;
    const ssnValue = ssn.value;

    if (ssn.value === '') {
        // ssn input field empty
        ssn.classList.add('invalid');
        invalidNotif.style.display = 'block';
    }
    else if (fullname.value === '') {
        // name input field empty
        ssn.classList.remove('invalid');
        invalidNotif.style.display = 'none';
        overlay.style.display = 'block';
        emptyNameModal.style.display = 'flex';
        cancelBtn.addEventListener('click', function () {
            // user want to input name
            overlay.style.display = 'none';
            emptyNameModal.style.display = 'none';
        })
        continueBtn.addEventListener('click', function () {
            // user don't want to input name => continue to data retrieval
            overlay.style.display = 'none';
            emptyNameModal.style.display = 'none';
            collectData(fullnameValue, ssnValue);
        })
    } else {
        // both name and ssn input fields not empty

        collectData(fullnameValue, ssnValue);
    }
    // console.log(person); returns the methods, not the properties
    // console.log(person.getName());
    // console.log(person.getSSN());
    // console.log(data);
})

function collectData(fullnameValue, ssnValue) {
    // issue: want to compare the current ssnValue with the ssn existing in the data array
    const targetPerson = data.find(person => person.getSSN() === ssnValue); // ssn found in data array => ssn exists
    targetPerson === undefined ? ssnExist = false : ssnExist = true;
    let nameExist = false;
    if (ssnExist === true) {
        // ssn exists, check if there's a name => if no name, then assign name with ssn w/o making new entry into data array
        const targetPersonName = targetPerson.getName();
        if (targetPersonName) nameExist = true;
    }
    // console.log(ssnExist);

    // push name only if ssn doesn't exist in the data
    // push duplicate names as it's possible to have different people with same name
    // ssn is the unique identifier since not possible for different people to have same ssn
    if (ssnExist === true && nameExist === false) {
        // ssn exists but w/o assigned name
        // if fullnameValue is not empty then assign value to corresponding name property of person with ssnValue
        targetPerson.setName(fullnameValue);
        // console.log(targetPerson.getName())
        inputContainer.style.display = 'none';
        retrieveContainer.style.display = 'flex';
    } else if (ssnExist === true) {
        // ssn with assigned name already exists => can't add ssn again
        ssn.classList.add('invalid');
        invalidNotif.style.display = 'block';
    } else {
        // ssn doesn't exist
        inputContainer.style.display = 'none';
        retrieveContainer.style.display = 'flex';
        const person = pii(fullnameValue);
        // if name and ssn is inputted then assign ssn to name 
        if (ssnValue !== '') {
            person.setSSN(ssnValue);
        }
        data.push(person);
        displayData(person);
    }
}

function displayData(person) {
    const name = person.getName();
    const ssn = person.getSSN();
    person = { name, ssn }; // does this defeat the purpose of creating the closure, since accessing to be assigned again outside of the closure?

    // look through table cells if ssn is displayed
    // if ssn is displayed, check if name is displayed
    // if name not displayed, displayed name with corresponding column to ssn displayed
    const rows = dataTable.getElementsByTagName('tr');
    for (let i = 0; i < rows.length; i++) {
        const cells = rows[i].getElementsByTagName('td');
        for (let j = 0; j < cells.length; j++) {
            console.log(cells[j].innerText);
            console.log(ssn);
            if (cells[j].innerText === ssn) {
                console.log(`${ssn} is displayed.`);
                // check if name is displayed
                console.log(cells[j - 1].innerText);
                // if (cells[j - 1] !== name) {
                //     // name is not displayed
                //     cells[j - 1].innerText = name;
                // } else {
                //     console.log(`${name} is displayed.`)
                // }
            }
            //else {
            //     // ssn is not displayed => ssn doesn't exist
            //     return;
            // }
        }
    }

    // since ssn doesn't exist, display both ssn and name
    const row = dataTable.insertRow();
    const nameCell = row.insertCell();
    const ssnCell = row.insertCell();
    for (const [key, value] of Object.entries(person)) {
        if (key === 'name') {
            nameCell.innerText = value;
        }
        if (key === 'ssn') {
            ssnCell.innerText = value;
        }
    }
    // console.log(`${person.getName()} displayed in table`);
}

////////// Challenge //////////
function pii(name) {
    const PII = {
        name: name,
        ssn: null // have to give default value in order to be considered declared
    }
    return {
        setName(assignedName) { // added this method to fit logic above
            PII.name = assignedName;
        },
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