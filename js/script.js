{
  const calculateResult = (amount, currency) => {
    const rateEUR = 4.2559;
    const rateUSD = 3.6253;
    const rateCAD = 2.597;

    switch (currency) {
      case "EUR":
        return amount / rateEUR;

      case "USD":
        return amount / rateUSD;

      case "CAD":
        return amount / rateCAD;
    }
  };

  const updateResultText = (amount, result, currency) => {
    const resultElement = document.querySelector(".js-result");
    resultElement.innerHTML = `${amount.toFixed(2)} PLN = <strong>${result.toFixed(2)} ${currency}</strong>`;
  };

  const onFormSubmit = (event) => {
    event.preventDefault();

    const amountElement = document.querySelector(".js-amount");
    const currencyElement = document.querySelector(".js-currency");

    const amount = +amountElement.value;
    const currency = currencyElement.value;

    const result = calculateResult(amount, currency);

    updateResultText(amount, result, currency);
  };

  const init = () => {
    const formElement = document.querySelector(".js-form");

    formElement.addEventListener("submit", onFormSubmit);

  };

  init();
}