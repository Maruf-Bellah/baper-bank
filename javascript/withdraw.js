document.getElementById('withdraw-button').addEventListener('click', function(){
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawValue = withdrawInput.value ;

    if(withdrawValue === ''){
        alert('Hey bro put the number')
    }else{

        const stringToNumWith = parseFloat(withdrawValue);
    
        const withdraw = document.getElementById('withdraw-total');
        const withdrawDisplay = withdraw.innerText;
        const stringToNumDisplay = parseFloat(withdrawDisplay)
    
        const totalDisplay = stringToNumWith + stringToNumDisplay;
    
        const totalwithdraw = document.getElementById('withdraw-total').innerText = totalDisplay;
    
        const balance = document.getElementById('balance-total');
        const balanceDisplay = balance.innerText;
        const stringToNumBalanc = parseFloat(balanceDisplay)
        const totalBalanceDisplay =  stringToNumBalanc - totalwithdraw;
        document.getElementById('balance-total').innerText = totalBalanceDisplay;
    }
    withdrawInput.value = ''

    
})