//formData({
// number: document.querySelector(`.cardNumber-js`),
//month: document.querySelector(`.month-js`),
//year: document.querySelector(`.year-js`),
//});
let number = document.querySelector(`.cardNumber-js`);
function formValidator(field) {
    field.number.addEventListener(`input`, function () {
        let value = this.value;
        if (value.length === 16) {
            document.querySelector(`.CardNumber`).innerHTML = this.value;
        }
    });
}
formValidator(field:{number});
