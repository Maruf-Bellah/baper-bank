document
  .getElementById("diposite-button")
  .addEventListener("click", function () {
    const inputText = document.getElementById("diposite-input");
    const inputValue = inputText.value;
    const strTonNumInput = parseFloat(inputValue);


    const diposite = document.getElementById("diposite-total");
    const dipositeTotal = diposite.innerText;
    const strTonNumDiposite = parseFloat(dipositeTotal);
    const totalDisplay = strTonNumInput + strTonNumDiposite;

     document.getElementById('diposite-total').innerText = totalDisplay;

    const balance = document.getElementById("balance-total");
    const balanceShow = balance.innerText;
    const stringToNumBalanc = parseFloat(balanceShow);
  
    const totalBalance =totalDisplay + stringToNumBalanc;
    console.log(totalBalance);

    document.getElementById("balance-total").innerText = totalBalance;
  });

document
  .getElementById("withdraw-button")
  .addEventListener("click", function () {
    const inputWithdraw = document.getElementById("withdraw-input");
    const window = inputWithdraw.value;
    console.log(window);
  });
