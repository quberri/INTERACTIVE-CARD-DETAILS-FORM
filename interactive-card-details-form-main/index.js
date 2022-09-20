const cardNmber = document.getElementById("cardNumber");
const cardName = document.getElementById("cardName");
const cardMonth = document.getElementById("cardMonth");
const cardYear = document.getElementById("cardYear");
const cvcInfo = document.getElementById("cvcInfo");
const holderName = document.getElementById("cardHolderName");
const holderNumber = document.getElementById("cardHolderNumber");
const month = document.getElementById("month");
const year = document.getElementById("year");
const cvc = document.getElementById("cvc");
const submit = document.getElementById("submit");
const nameError = document.querySelector("nameError");
const numberError = document.getElementById("numberError");
const dateError = document.getElementById("dateError");
const cvcError = document.getElementById("cvcError");
const continueBtn = document.getElementById("continue");


//Name Validation

holderName.onkeyup = function () {
    let cardNameUpper = holderName.value
    if (holderName.value !== "") {
        cardName.innerHTML = cardNameUpper.toUpperCase();
    } else {
        frontName.innerHTML = "Jane Appleseed";
    }
};   