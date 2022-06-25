function formValidator(field) {
    field.number.addEventListener(`keypress`, function (e) {
        const value = this.value;
        if (value.length === 16) {
            e.preventDefault();
            document.querySelector(`.CardNumber`).innerHTML = `${value.substring(0, 4)} ${value.substring(
                4,
                8
            )} ${value.substring(8, 12)} ${value.substring(12, 16)}`;
        }
    });

    field.month.addEventListener(`input`, function () {
        if (this.value !== `null`) {
            document.querySelector(`.Month`).innerHTML = this.value;
            console.log(this.value);
        }
    });
    field.year.addEventListener(`input`, function () {
        if (this.value !== `null`) {
            document.querySelector(`.Year`).innerHTML = this.value;
            console.log(this.value);
        }
    });
}
formValidator({
    number: document.querySelector(`.cardNumber-js`),
    month: document.querySelector(`.month-js`),
    year: document.querySelector(`.year-js`),
});
