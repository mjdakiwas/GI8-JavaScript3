//// Scratchpad ////

// function exercise(exercise) {
//     return function() {
//         return `Today's exercise: ${exercise}`;
//     };
// }

// function exercise(exercise) {
//     return () => {return `Today's exercise: ${exercise}`}
// }

// const exerciseOfTheDay = exercise('Running'); 
// console.log(exerciseOfTheDay());
// have to assign function to a variable to call the inner function
// i.e. exercise('Running') returns the inner function but isn't called

//// End of Scratchpad ////

///// Easy JS /////
const notification = document.getElementById('notif');
const exerciseInput = document.getElementById('exercise');
const submit = document.getElementById('submit');
const notifContainer = document.getElementById('notif-container');
const inputContainer = document.getElementById('input-container');
const invalidInput = document.getElementById('easy-invalid');
const todayContainer = document.getElementById('today-container');
const changeExercise = document.getElementById('change');

submit.addEventListener('click', function () {
    console.log('submit clicked');
    const todayExercise = exerciseInput.value;
    notification.innerText = exercise(todayExercise);

    if (todayExercise !== '') {
        todayContainer.style.display = 'block';
        notifContainer.style.display = 'block';
    } else {
        invalidInput.style.display = 'block'
        // const invalidNotif = document.createElement('p');
        // invalidNotif.id = 'invalid-input';
        // invalidNotif.textsContent = 'Please enter a value.';
        // inputContainer.appendChild(invalidNotif);
    }

    if (todayContainer.style.display === 'block') {
        inputContainer.style.display = 'none';
    }
})

changeExercise.addEventListener('click', function () {
    exerciseInput.value = '';
    invalidInput.style.display = 'none'
    todayContainer.style.display = 'none';
    notifContainer.style.display = 'none';
    inputContainer.style.display = 'block';
})


////////// Challenge //////////
function exercise(exercise) {
    function exerciseOfTheDay() {
        return `Today's exercise: ${exercise.toUpperCase()}`;
    }
    return exerciseOfTheDay();
}
console.log(exercise('Running'));
console.log(exercise('Swimming'));
console.log(exercise('Dancing'));
console.log(exercise('Fencing'));