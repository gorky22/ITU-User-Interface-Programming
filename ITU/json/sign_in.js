
const name = document.getElementById('name')
const password = document.getElementById('psw')
const form = document.getElementById('form');
const error1 = document.getElementById('error')
const error2 = document.getElementById('error2')



/*localStorage.setItem("name","password");    /// will use 2 parameters
localStorage.removeItem("name");

localStorage.setItem("age","30");
localStorage.setItem("name","bla bla")  //localstrogae.key(1)-> prvy prvok 
console.log(localStorage);*/

console.log(localStorage);

form.addEventListener('submit',(e) => {
    let messages = "";
    error1.style.display = "none";
    error2.style.display = "none";


    if (name.value === '' || name.value === null) {
        messages="vyplnte toto pole"
        error1.innerText = messages;
        
        error1.style.display = "block";

    }
    
    if(password.value.length <= 6) {
        messages="malo znakov"  
        error2.innerText = messages;
        error2.style.display = "block";
    }

    if (localStorage.length != 0 && password.value.length > 6) {
        for (let i = 0; i < localStorage.length; i++) {
        const a = JSON.parse(localStorage.getItem(localStorage.key(i)));
            if(a.is == "true") {
                a.is = "false"

                myjs = JSON.stringify(a);
                localStorage.setItem(localStorage.key(i),myjs); 
                
            }    

          if (localStorage.key(i) == name.value) {
           

                if (a.psw != password.value) {
                    messages="nespravne heslo pre toto meno"
                     error2.innerText = messages;
        
                     error2.style.display = "block";
                } else {
                    a.is = "true"

                myjs = JSON.stringify(a);
                localStorage.setItem(localStorage.key(i),myjs); 
                    
                }
                   
          }
                
        }
    }

   

    if (messages == "") {
       
        
        
    } else {
        
        e.preventDefault();
        
        
    } 

   
    
    

})





