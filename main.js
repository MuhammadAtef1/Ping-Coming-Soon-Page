let emailInput = document.getElementById("email");
console.log(emailInput);
let submit = document.getElementById("submit");
let redborder = document.querySelector(".input-email input:nth-child(1)");
let textError = document.querySelector(".error");
let reg = /^\w+\d*@\w+\.com$/g ;

submit.addEventListener("click" , function () {
    if (!emailInput.value.match(reg)) {
        redborder.style.borderColor = "hsl(354, 100%, 66%)";
        textError.style.display = "block" ;
        emailInput.addEventListener("click" , function () {
            redborder.style.borderColor = "hsl(0, 0%, 59%)";
            textError.style.display = "none" ;
        })
    }
    else {
        emailInput.value = "" ;
    }
})