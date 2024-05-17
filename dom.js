const massvalue = document.getElementById("massInput");
const heightvalue = document.getElementById("heightInput");
const result = document.getElementById("resultarea")
const error = document.getElementById("errors")
const clock = document.getElementById("clock")
const validatevalue = () => {
    result.innerText = ""
    error.innerText = ""
    if (massvalue.value === "") {
        error.innerText = ("Please Enter Mass")
        return false
    }
    if (heightvalue.value === "") {
        error.innerText = ("Please Enter Height")
        return false
    }
    return true
}
const calBMI = () => {

    // let contin = true
    // while (contin) {
    const mass = parseFloat(massvalue.value);
    const height = parseFloat(heightvalue.value);
    const bmi = mass / ((height / 100) ** 2);
    if (bmi < 18.5) {
        result.innerHTML = ("You are underweight");
    } else if (bmi < 25) {
        result.innerHTML = ("You are healthy");
    } else if (bmi < 30) {
        result.innerHTML = ("You are overweight");
    } else {
        result.innerHTML = ("You are obese");
    }
    // contin = confirm("Do you want to continue ? ");
    // }
}

// let clockCounter = 0
// const updateClock =() =>
//     {
//         clock.innerHTML = clockCounter
//         clockCounter++
//     }
// setInterval(updateClock,1000)

// (function(){ let contin = true
// while (contin) {
//     let mass = parseFloat(prompt("Enter your weight in kg"));
//     let height = parseFloat(prompt("Enter your height in cm"));
//     let bmi = mass / ((height/100) ** 2);
//     if (bmi < 18.5) {
//         alert("You are underweight");
//     } else if (bmi < 25) {
//         alert("You are healthy");
//     } else if (bmi < 30) {
//         alert("You are overweight");
//     } else {
//         alert("You are obese");
//     }
//     contin = confirm("Do you want to continue ? ");
// }
// }
// )();
