document.getElementById('diposite-button').addEventListener('click',function(){
     // gett the amount dipsited===============
   const depositeInput=document.getElementById('diposite-input');
   const newDepositeAmountText = depositeInput.value;
   const newDepositeAmount = parseFloat(newDepositeAmountText);

  // update dipositeTotal======================
   const dipositeTotal = document.getElementById('diposite-total');
   const priviusDipositText = dipositeTotal.innerText;
   const priviusDipositAmount = parseFloat(priviusDipositText);
   const newDipositeTotal = priviusDipositAmount + newDepositeAmount;
  dipositeTotal.innerText = newDipositeTotal;

  // update diposite balance=====================
  const balanceTotal = document.getElementById('balance-total');
  const balanceTotalText = balanceTotal.innerText;
  const previousBalanceTotal = parseFloat(balanceTotalText);
  const newBalanceTotal = previousBalanceTotal + newDepositeAmount;
  balanceTotal.innerText = newBalanceTotal;

//   clear the deposite input fild
depositeInput.value ='';
})

//  handle withdraw even handler===========================
document.getElementById('withdraw-button').addEventListener('click', function(){
      const withdrawInput = document.getElementById('withdraw-input');
      const withdrawAmountText = withdrawInput.value;
      const newWithdrawAmount = parseFloat(withdrawAmountText)
      console.log(newWithdrawAmount);

      // set withdraw total===================
      const withdrawTotal = document.getElementById('withdraw-total');
      const previousWithdrawText = withdrawTotal.innerText;
      const previousWihdrawTotal = parseFloat(previousWithdrawText);

      const newWithdrawTotal = previousWihdrawTotal + newWithdrawAmount;
      withdrawTotal.innerText = newWithdrawTotal;

   
      // update withdraw balance=============
      const balanceTotal = document.getElementById('balance-total');
      const previousBalanceText = balanceTotal.innerText;
      const previousBalanceTotal = parseFloat(previousBalanceText);
      const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;

      balanceTotal.innerText = newBalanceTotal;

         // clear withdraw =============
         withdrawInput.value = '';

})



