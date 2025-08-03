//// Medium JS /////
const calculateBtn = document.getElementById('calculate');
const slices = document.getElementById('slices');
const people = document.getElementById('people');
const resultContainer = document.getElementById('result-container');
const result = document.getElementById('result');
const invalidNotif = document.getElementById('medium-invalid');
const inputContainer = document.getElementById('input-container');
const backBtn = document.getElementById('back');

calculateBtn.addEventListener('click', function () {
    const slicesValue = slices.value;
    const peopleValue = people.value;
    if (slicesValue !== '' && peopleValue !== '') {
        result.innerText = sharePizza(slicesValue, peopleValue);
        resultContainer.style.display = 'block';
        // slices.classList.remove('invalid');
        // people.classList.remove('invalid');
        // invalidNotif.style.display = 'none';
        inputContainer.style.display = 'none';
        invalidNotif.style.display = 'none';
        calculateBtn.style.display = 'none';
    } else {
        slices.classList.remove('invalid');
        people.classList.remove('invalid');
        invalidNotif.style.display = 'block';
        if (slicesValue === '') {
            slices.classList.add('invalid');
            invalidNotif.textContent = 'Please input a number for the amount of slices.';
        }
        if (peopleValue === '') {
            people.classList.add('invalid');
            invalidNotif.textContent = 'Please input a number for the amount of people.';
        }
        if (slicesValue === '' && peopleValue === '') invalidNotif.textContent = 'Please input a number for the amount of slices and the amount of people.';
    }
})

backBtn.addEventListener('click', function () {
    inputContainer.style.display = 'flex';
    resultContainer.style.display = 'none';
    slices.value = '';
    people.value = '';
    slices.classList.remove('invalid');
    people.classList.remove('invalid');
    invalidNotif.style.display = 'none';
    calculateBtn.style.display = 'block';
})

////////// Challenge //////////
function sharePizza(slices, people) {
    // function split() {
    //     return slices / people;
    // }
    // const share = slices / people;
    // const share = split();
    const share = () => { return slices / people }; // condensed version of the logic above
    const roundedShare = Math.round(share() * 100) / 100;
    return `Each person gets ${roundedShare} slices of pizza from the ${slices} slice pizza.`;
}
console.log(sharePizza(8, 2));
console.log(sharePizza(8, 3));
console.log(sharePizza(21, 20));
console.log(sharePizza(10, 3));