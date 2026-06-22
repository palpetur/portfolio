function cssChange() {

    const value = document.querySelector(`input[name='css']:checked`).value;
    document.getElementById("style").href = "css/style{value}.css";
    console.log(value);
}