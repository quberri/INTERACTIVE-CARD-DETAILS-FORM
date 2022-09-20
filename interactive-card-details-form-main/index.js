const cardNumber = document.getElementById("cardNumber");
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

holderName.onkeyup = function () {
    let cardNameUpper = holderName.value
    if (holderName.value !== "") {
        cardName.innerHTML = cardNameUpper.toUpperCase();
    } else {
        cardName.innerHTML = "Jane Appleseed";
    }
};

holderNumber.onkeyup = () => {
    if (holderNumber.value !== "") {
        cardNumber.innerHTML = holderNumber.value;
    } else {
        holderNumber.innerHTML = "0000 0000 0000 0000";
    }
};

month.onkeyup = () => {
    if (month.value !== "" || month.value > 0 || month.value <= 12) {
        cardMonth.innerHTML = month.value;
    } else {
        month.innerHTML = "00";
    }
};

year.onkeyup = () => {
    if (year.value !== "") {
        cardYear.innerHTML = year.value;
    } else {
        year.innerHTML = "00";
    }
};

cvc.onkeyup = () => {
    if (cvc.value !== "") {
        cvcInfo.innerHTML = cvc.value;
    } else {
        cvc.innerHTML = "000";
    }
};
function formDetails() {
    document.getElementById("formDetails").style.display = "none";
    document.getElementById("completed").style.display = "block";
}
function completed() {
    document.getElementById("completed").style.display = "none";
    document.getElementById("formDetails").style.display = "block";
}

