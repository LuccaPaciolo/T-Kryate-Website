const busGoals = document.getElementById("business");
const error = document.querySelector("span.error");




const errorMessage = () => {
    busGoals.addEventListener ('input', ()=> {
        if (busGoals.validity.valid) {
            error.textContent = "";
        }
        else if (busGoals.validity.valueMissing) {
            error.textContent = "This area must not be left blank!"
    
        }
    })
    
}

errorMessage();