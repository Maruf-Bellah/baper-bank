document.getElementById("diposite-button").addEventListener("click", function () {
    const innerText = document.getElementById("diposite-input");
    const inputValue = innerText.value;

    const diposite = document.getElementById("diposite-total");
    const dipositeTotal = diposite.innerText = inputValue;

     const stringToNumberDiposit = parseFloat(dipositeTotal);
     const balance = document.getElementById("balance-total")
     const balanceShow = balance.innerText
     const stringToNumberBalanc = parseFloat(balanceShow);
    
     const total = stringToNumberBalanc + stringToNumberDiposit;
     document.getElementById("balance-total").innerText = total;
            
        
  });
