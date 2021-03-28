
/***
  * XMLHttpRequest object constructor (for compatibility with various browsers)
  */

/*

 function createXmlHttpRequestObject() 
 {
     var request;
   
     try
     {
         request = new XMLHttpRequest(); // should work on all browsers except IE6 or older
     } 
     catch (e) 
     { 
         try 
         {
             request = new ActiveXObject("Microsoft.XMLHttp"); // browser is IE6 or older
         }
         catch (e) 
         {
             // ignore error
         }
     }
   
     if (!request) 
     {
         alert("Error creating the XMLHttpRequest object.");
     } 
     else 
     {
         return request;
     }
 }

 $.ajax({
    type: 'GET',
    datatype: 'json',
    url: 'data.json',
    success: function(orders) {
      $.each(orders, function(i, order) {
          alert(order.question );
        
      });
    },
    error: function() {
      alert('error loading orders');
    }
});


var order = {
    question: "Who invented JavaScript?",
};

$.ajax({
  type: 'POST',
  url: 'data.json',
  data: order,
  success: function(newOrder) {
    order.append('<li>Name: ' + newOrder.name + ', Drink: ' + newOrder.drink +  '</li>');
    },
  error: function () {
    alert("error saving order");
  }
  });
*/
  

 /*$.getJSON( "data.json", function( x ) {
    
        $(x.data).each(function(index,value) {
            alert("jebo")
            console.log(value.question);
        });
    });*/
    var a = 'sadas';
    var b = "dasd";
    var myCollection = [a,b,{}]

  
   
    

function name_display() {
 
  for (let i = 0; i < localStorage.length; i++) {
    
     
    var a = localStorage.getItem(localStorage.key(i))
    a = JSON.parse(a);
        if(a.is == "true") {
          document.getElementById("name").innerHTML = localStorage.key(i);
           if(a.day_of_exam != "false") {
            const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
            const firstDate = new Date(a.day_of_exam);
            const secondDate = new Date();
          
            const diffDays = Math.round(Math.abs((firstDate - secondDate) / oneDay));
            if(diffDays +1 == 0) {
              document.getElementById("days_to_exam").innerHTML = "dnes";
            }  else if (diffDays + 1 < 0) {
              document.getElementById("days_to_exam").innerHTML = "uz je po";
            } else {
              document.getElementById("days_to_exam").innerHTML = diffDays + 1;
            }
            
             
           }
        }    
            
    }

}




function screen_resize() {
    var w = parseInt(window.innerWidth);
    var x = document.getElementById("menu");
    if(w > 576) {
            x.style.display = "flex";
    }  else {
           x.style.display = "none";
    }

}

function myFunction() {
var x = document.getElementById("menu");
if (x.style.display === "block") {
x.style.display = "none";
} else {
x.style.display = "block";
}



}
