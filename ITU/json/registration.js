

const name = document.getElementById('name')
const password = document.getElementById('psw')
const psw_repeat = document.getElementById('psw-repeat')
const form = document.getElementById('form');
const error1 = document.getElementById('error')
const error2 = document.getElementById('error2')
const error3 = document.getElementById('error3')

var x = [{"good":0,"show":"false","bad":0},
{"good":0,"show":"false","bad":0},
{"good":0,"show":"false","bad":0},
{"good":0,"show":"false","bad":0},
{"good":0,"show":"false","bad":0},
{"good":0,"show":"false","bad":0},
{"good":0,"show":"false","bad":0},
{"good":0,"show":"false","bad":0},
{"good":0,"show":"false","bad":0},
{"good":0,"show":"false","bad":0},
{"good":0,"show":"false","bad":0},
{"good":0,"show":"false","bad":0},
{"good":0,"show":"false","bad":0},
{"good":0,"show":"false","bad":0},
{"good":0,"show":"false","bad":0},
{"good":0,"show":"false","bad":0},
{"good":0,"show":"false","bad":0},
{"good":0,"show":"false","bad":0},
]


/*localStorage.setItem("name","password");    /// will use 2 parameters
localStorage.removeItem("name");

localStorage.setItem("age","30");
localStorage.setItem("name","bla bla")  //localstrogae.key(1)-> prvy prvok 
console.log(localStorage);*/











form.addEventListener('submit',(e) => {
    let messages = "";
    error1.style.display = "none";
    error2.style.display = "none";
    error3.style.display = "none";

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

    if(psw_repeat.value != password.value) {
        messages="hesla sa nezhoduju"
        error3.innerText = messages;
        error3.style.display = "block";
        
    }

    if (localStorage.length != 0) {
        for (let i = 0; i < localStorage.length; i++) {
            
          if (localStorage.key(i) == name.value) {

            messages="uz existuje uzivatel s danym menom"
            error1.innerText = messages;
        
            error1.style.display = "block";
            
          }
                
        }
    }
    
    
    if (messages == "") {
       console.log(x)
        to_be_pushed = {"psw": password.value,"is": "true","day_of_exam": "false","otazka":x};
        myjs = JSON.stringify(to_be_pushed);
        localStorage.setItem(name.value,myjs); 
        
        

       
        
        window.location.href="sign_in.html" ;
    }
    if (messages != "") {
        e.preventDefault();
        
        
    } 




})





