document
  .getElementById("diposite-button")
  .addEventListener("click", function () {
    const inputText = document.getElementById("diposite-input");
    const inputValue = inputText.value;
    const strTonNumInput = parseFloat(inputValue);
    if (inputValue === "") {
      alert("Hey bro put the number");
    } else {
      const diposite = document.getElementById("diposite-total");
      const dipositeTotal = diposite.innerText;
      const strTonNumDiposite = parseFloat(dipositeTotal);
      const totalDisplay = strTonNumInput + strTonNumDiposite;

      document.getElementById("diposite-total").innerText = totalDisplay;

      const balance = document.getElementById("balance-total");
      const balanceShow = balance.innerText;
      const stringToNumBalanc = parseFloat(balanceShow);

      const totalBalance = totalDisplay + stringToNumBalanc;
      document.getElementById("balance-total").innerText = totalBalance;
    }
    inputText.value = ''
  });

