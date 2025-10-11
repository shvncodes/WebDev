const currencySelectorNode = document.querySelectorAll(".currency-selector select");
const buttonNode = document.querySelector("button");
const fromCurrNode = document.querySelector(".from select");
const toCurrNode = document.querySelector(".to select");
const resultNode = document.querySelector(".result");
const prevDataNode = document.querySelector(".prevData");
const LOCAL_STORAGE_KEY = "prev_data";

const history = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) ?? [];

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

buttonNode.addEventListener("click", async (event)=> {
    event.preventDefault(); //stops the browser’s default action (reload page)
    let amount = document.querySelector(".amount input");
    let amtVal = amount.value;
    if(amtVal === "" || amtVal < 1) {
        amtVal = 1;
        amount.value = 1;
    }

    const from = fromCurrNode.value.toLowerCase();
    const to = toCurrNode.value.toLowerCase()
    const API = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${from}.json`;
    console.log(API);
    const response = await fetch(API);
    const data = await response.json();
    const curr = data[from][to];
    console.log(curr);
    
    const finalAmt = amtVal*curr;
    console.log(finalAmt);

    resultNode.innerText = `${amtVal} ${fromCurrNode.value} = ${finalAmt} ${toCurrNode.value}`;

    const conversion = {
        id: Math.random(),
        Date: new Date().toDateString(),
        From: `${amtVal} ${fromCurrNode.value}`,
        To: `${finalAmt} ${toCurrNode.value}`
    }
    
    history.push(conversion);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(history));

});


const DATA = [
    {
        id: ";gjewhg",
        date: "date",
        from: "5 USD",
        to: "455.5 INR"
    }
]