let price = document.querySelector("#price");

document.querySelector(".calc").addEventListener("click", function (e){
    if(e.target.id == "btn"){
        let listInput = document.querySelector("#inputList");
        let lipInput = document.querySelector("#inputLip");

        let num = (listInput.value * 0.182 + listInput.value * 0.31 + lipInput.value * 0.01) * 2.29;
        
        if (!isNaN(num)) {
            price.textContent = Math.floor(num) + "р. " + Math.ceil((num - Math.floor(num)) * 100) + "коп.";
        }
        else{
            listInput.value = "";
            lipInput.value = "";
        }
    }
})