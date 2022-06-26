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
        CheckALL();
    });

    field.month.addEventListener(`input`, function () {
        if (this.value !== `null`) {
            document.querySelector(`.Month`).innerHTML = this.value;
        }
        CheckALL();
    });
    field.year.addEventListener(`input`, function () {
        if (this.value !== `null`) {
            document.querySelector(`.Year`).innerHTML = this.value;
        }
        CheckALL();
    });
    field.cvv.addEventListener(`keypress`, function (e) {
        const value = this.value;
        if (value.length === 3) {
            e.preventDefault();
            document.querySelector(`.CVV`).innerHTML = this.value;
        }
        CheckALL();
    });
    field.name.addEventListener(`input`, function () {
        this.value = this.value.replace(/[^A-Za-zА-Яа-яЁё\s]/g, "").substring(0, 13);
        document.querySelector(".Name").innerHTML = this.value;
        CheckALL();
    });
    function CheckALL() {
        let filled = [];
        const validElement = document.querySelector(".submit-js");
        for (let key in field) {
            field.number.value.length >= 16 && field.cvv.value.length >= 3 && field.name.value.length >= 3
                ? filled.push(true)
                : filled.push(false);
            field[key].value.length !== 0 ? filled.push(true) : filled.push(false);
        }
        filled.some((validElement) => validElement === false)
            ? (validElement.disabled = true)
            : (validElement.disabled = false);
    }
    const form = document.querySelector(".form");
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        console.log({
            number: field.number.value,
            name: field.name.value,
            month: field.month.value,
            year: field.year.value,
            cvv: field.cvv.value,
        });
    });
}
formValidator({
    number: document.querySelector(`.cardNumber-js`),
    month: document.querySelector(`.month-js`),
    year: document.querySelector(`.year-js`),
    cvv: document.querySelector(`.cvv-js`),
    name: document.querySelector(`.name-js`),
});
