// const BASE_URL = "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies";

// const dropdown = document.querySelectorAll('select')
// const from = document.querySelector('.from select')
// const to = document.querySelector('.to select')
// const result = document.querySelector('.result')
// const btn = document.querySelector('.convert button')
// const exchangeBtn = document.querySelector('.exchange button')


// for (const select of dropdown)
// {
//     for (const code in countryList)
//     {
//         let newOption = document.createElement("option");
//         newOption.innerHTML = code;    
//         select.append(newOption)
//     }    
//     select.addEventListener('change', (e) => {
//         updateFlag(e.target);
//     })
// }
// from.value = "USD";
// to.value = "INR";
// window.addEventListener("load", () => {
//     updateValue();
// })


// const updateValue = async () => {
//     let amount = document.querySelector('.amount input');
//     let amtVal = amount.value;

//     if (isNaN(amtVal) || amtVal <= 0) {
//         result.innerHTML = "Please enter a valid number";
//         return;
//     }

//     result.innerHTML = "Fetching data...";

//     try {
//         let url = `${BASE_URL}/${from.value}`;
//         let response = await fetch(url);

//         if (!response.ok) throw new Error("Failed to fetch data");

//         let data = await response.json();
//         let rate = data.conversion_rates[to.value];

//         if (!rate) {
//             result.innerHTML = "Currency not found.";
//             return;
//         }

//         let finalAmount = (amtVal * rate).toFixed(3);
//         result.innerHTML = `${amtVal} ${from.value} = ${finalAmount} ${to.value}`;
//     } catch (error) {
//         result.innerHTML = "Error fetching exchange rates.<br>Please try again later.";
//         console.error(error);
//     }
// };


// const updateFlag = (element) => {
//     let currCode = element.value;
//     let conCode = countryList[currCode];
//     let newSrc = `https://flagsapi.com/${conCode}/flat/64.png`;
//     let img = element.parentElement.querySelector('img');
//     img.src = newSrc;
// }

// btn.addEventListener('click', async (e) => {
//     e.preventDefault();
//     updateValue();
// })

// exchangeBtn.addEventListener('click', (e) => {
//     e.preventDefault();
//     const temp = from.value;
//     from.value = to.value;
//     to.value = temp;

//     updateFlag(from);
//     updateFlag(to);
    
//     updateValue();
// })

// ---------------------------------------------


// const API_KEY = "7a0923da3107d5d2d004f4ea";
// const BASE_URL = `https://v6.exchangerate-api.com/v6/${API_KEY}/latest`;

// const dropdowns = document.querySelectorAll("select");
// const from = document.querySelector(".from select");
// const to = document.querySelector(".to select");
// const result = document.querySelector(".result");
// const btn = document.querySelector(".convert button");
// const exchangeBtn = document.querySelector(".exchange button");

// // Populate dropdowns
// for (let select of dropdowns) {
//   for (let code in countryList) {
//     let option = document.createElement("option");
//     option.value = code;
//     option.textContent = code;
//     select.appendChild(option);
//   }
//   select.addEventListener("change", (e) => updateFlag(e.target));
// }

// // Set defaults
// from.value = "USD";
// to.value = "INR";
// updateFlag(from);
// updateFlag(to);

// window.addEventListener("load", updateValue);

// const updateValue = async () => {
//   let amountInput = document.querySelector(".amount input");
//   let amtVal = parseFloat(amountInput.value);

//   if (isNaN(amtVal) || amtVal <= 0) {
//     result.innerHTML = "Please enter a valid number";
//     return;
//   }

//   result.innerHTML = "Fetching data...";

//   try {
//     const url = `${BASE_URL}/${from.value}`;
//     const res = await fetch(url);
//     if (!res.ok) throw new Error("API error");

//     const data = await res.json();
//     const rate = data.conversion_rates[to.value];

//     if (!rate) {
//       result.innerHTML = "Currency not supported.";
//       return;
//     }

//     const finalAmount = (amtVal * rate).toFixed(3);
//     result.innerHTML = `${amtVal} ${from.value} = ${finalAmount} ${to.value}`;
//   } catch (error) {
//     result.innerHTML = "Error fetching exchange rates.<br>Please try again later.";
//     console.error(error);
//   }
// };

// const updateFlag = (element) => {
//   let currCode = element.value;
//   let countryCode = countryList[currCode];
//   if (!countryCode) return;
//   let img = element.parentElement.querySelector("img");
//   img.src = `https://flagsapi.com/${countryCode}/flat/64.png`;
// };

// btn.addEventListener("click", (e) => {
//   e.preventDefault();
//   updateValue();
// });

// exchangeBtn.addEventListener("click", (e) => {
//   e.preventDefault();
//   [from.value, to.value] = [to.value, from.value];
//   updateFlag(from);
//   updateFlag(to);
//   updateValue();
// });

// // Auto-refresh every 60 seconds
// setInterval(updateValue, 60000);

// -------------------------------------------------------------------------------------

// const API_KEY = "7a0923da3107d5d2d004f4ea";
// const BASE_URL = `https://v6.exchangerate-api.com/v6/${API_KEY}/latest`;

// const dropdown = document.querySelectorAll('select');
// const from = document.querySelector('.from select');
// const to = document.querySelector('.to select');
// const result = document.querySelector('.result');
// const btn = document.querySelector('.convert button');
// const exchangeBtn = document.querySelector('.exchange button');

// for (const select of dropdown) {
//   for (const code in countryList) {
//     let newOption = document.createElement("option");
//     newOption.innerHTML = code;
//     newOption.value = code;
//     select.append(newOption);
//   }

//   select.addEventListener('change', (e) => {
//     updateFlag(e.target);
//   });
// }

// from.value = "USD";
// to.value = "INR";

// window.addEventListener("load", () => {
//   updateFlag(from);
//   updateFlag(to);
//   updateValue();
// });

// const updateValue = async () => {
//   let amount = document.querySelector('.amount input');
//   let amtVal = amount.value.trim();

//   if (isNaN(amtVal) || amtVal <= 0) {
//     result.innerHTML = "Please enter a valid number";
//     return;
//   }

//   result.innerHTML = "Fetching data...";

//   try {
//     const response = await fetch(`${BASE_URL}/${from.value}`);
//     const data = await response.json();

//     if (!data || !data.conversion_rates[to.value]) {
//       result.innerHTML = "Currency not found.";
//       return;
//     }

//     const rate = data.conversion_rates[to.value];
//     const finalAmount = (amtVal * rate).toFixed(3);
//     result.innerHTML = `${amtVal} ${from.value} = ${finalAmount} ${to.value}`;
//   } catch (error) {
//     result.innerHTML = "Error fetching data. Try again.";
//   }
// };

// const updateFlag = (element) => {
//   let currCode = element.value;
//   let countryCode = countryList[currCode];
//   let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
//   let img = element.parentElement.querySelector("img");
//   img.src = newSrc;
// };

// btn.addEventListener("click", (e) => {
//   e.preventDefault();
//   updateValue();
// });

// exchangeBtn.addEventListener("click", (e) => {
//   e.preventDefault();
//   const temp = from.value;
//   from.value = to.value;
//   to.value = temp;
//   updateFlag(from);
//   updateFlag(to);
//   updateValue();
// });



// ------------------------------------------------------------------------

const fromCurrency = document.getElementById("from");
const toCurrency = document.getElementById("to");
const result = document.getElementById("result");
const amountInput = document.getElementById("amount");

const convertBtn = document.getElementById("convert-btn");
const exchangeBtn = document.getElementById("exchange-btn");

for (let currencyCode in countryList) {
  let option1 = document.createElement("option");
  let option2 = document.createElement("option");
  option1.value = option2.value = currencyCode;
  option1.textContent = option2.textContent = currencyCode;

  if (currencyCode === "USD") option1.selected = true;
  if (currencyCode === "INR") option2.selected = true;

  fromCurrency.appendChild(option1);
  toCurrency.appendChild(option2);
}

function updateFlags() {
  let fromCode = countryList[fromCurrency.value];
  let toCode = countryList[toCurrency.value];

  document.querySelector(".from img").src = `https://flagcdn.com/48x36/${fromCode.toLowerCase()}.png`;
  document.querySelector(".to img").src = `https://flagcdn.com/48x36/${toCode.toLowerCase()}.png`;
}

fromCurrency.addEventListener("change", updateFlags);
toCurrency.addEventListener("change", updateFlags);
window.addEventListener("load", updateFlags);

convertBtn.addEventListener("click", async () => {
  let amount = amountInput.value;
  if (amount === "" || amount <= 0) amount = 1;

  const from = fromCurrency.value;
  const to = toCurrency.value;

  try {
    const url = `https://api.exchangerate-api.com/v4/latest/${from}`;
    const res = await fetch(url);
    const data = await res.json();
    const rate = data.rates[to];

    const total = (amount * rate).toFixed(3);
    result.textContent = `${amount} ${from} = ${total} ${to}`;
  } catch (error) {
    result.textContent = "Error fetching exchange rates. Please try again later.";
  }
});

exchangeBtn.addEventListener("click", () => {
  const temp = fromCurrency.value;
  fromCurrency.value = toCurrency.value;
  toCurrency.value = temp;
  updateFlags();
});
