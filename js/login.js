document.getElementById('button-submit').addEventListener('click', function(){
          const emailFild = document.getElementById('user-email');
          const userEmail = emailFild.value;
        

          // ger usar password
          const passordFild =document.getElementById('user-password');
          const userPassword = passordFild.value;
          

          if(userEmail === 'maruf@gmail' && userPassword === 'maruf'){
               window.location.href='banking.html';
          }
          else{
               console.log('you are wrong');
          }
})

// alert('hello bro')