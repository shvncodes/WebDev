const BASE_URL = "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/usd.json";

const currencySelectorNode = document.querySelectorAll(".currency-selector select");
const buttonNode = document.querySelector("button");

// All currency code in select element:
(function () {
    for(let selector of currencySelectorNode) {
        for(currCode in countryList) {
            let newOption = document.createElement("option");
            newOption.innerText = currCode;
            newOption.value = currCode;
            if(selector.name === "from" && currCode === "USD") {
                newOption.selected = "selected";    //by default USD
            } else if(selector.name === "to" && currCode === "INR") {
                newOption.selected = "selected";    //by default INR
            }
            selector.append(newOption);
        }

        selector.addEventListener("change", (e)=> {
            updateFlag(e.target);
        });
    }
})();

const updateFlag = (element) => {
    let currCode = element.value;
    let countryCode = countryList[currCode];
    let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
    let img = element.parentElement.querySelector("img");
    img.src = newSrc;
}

buttonNode.addEventListener("click", (event)=> {
    event.preventDefault(); //stops the browser’s default action (reload page)
    let amount = document.querySelector(".amount input");
    let amtVal = amount.value;
    if(amtVal === "" || amtVal < 1) {
        amtVal = 1;
        amount.value = 1;
    }
});