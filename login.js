document.getElementById('button-submit').addEventListener('click', function(){
    const userEmail = document.getElementById('user-email');
    const email = userEmail.value;
    
    const userPassword= document.getElementById("user-password");
    const passwor = userPassword.value;
 
    if(email === 'maruf@gmail.com' && passwor === 'maruf'){
        window.location.href ='banking.html'
    }else{
        alert('you ar wrong')
    }
    userEmail.value = '';
    userPassword.value= '';
})