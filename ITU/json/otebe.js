


$(document).ready(function(){

    $("#send").click(function(){

        var year= document.querySelector('#year').value;
        var month = document.querySelector('#month').value;
        var day = document.querySelector('#day').value;
       
        if (year == 'rok') {
            alert("nevyplnene vsetky policka")
            return;
        } else  if (month == 'Mesiac') {
            alert("nevyplnene vsetky policka")
            return
        } else  if (day == 'dan') {
            alert("nevyplnene vsetky policka")
            return
        } else 
        
        var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        var yy = today.getFullYear();
        dd = parseInt(dd, 10);
        if (year == yy && month < mm) {
            alert("zadali ste datum v minulosti")
            return
        } else if (year == yy && month <= mm && day < dd){
            alert("zadali ste datum v minulosti")
            return
        } else if (year < yy) {
            alert("zadali ste datum v minulosti")
            return
        }
       
        var x;
        for (let i = 0; i < localStorage.length; i++) {
            var a = localStorage.getItem(localStorage.key(i))
            a = JSON.parse(a);
                if(a.is == "true") {
                     x = month+"/"+day+"/"+year
                a.day_of_exam = x;
                myjs = JSON.stringify(a);
                localStorage.setItem(localStorage.key(i),myjs);
                
                const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
                 const firstDate = new Date(x);
                const secondDate = new Date();
          
                    const diffDays = Math.round(Math.abs((firstDate - secondDate) / oneDay));
                if(diffDays + 1 == 0) {
                    $(document).ready(function(){
                        $('#days_to_exam').text("dnes");
                        })    
                }  else if (diffDays + 1 < 0) {
                    $(document).ready(function(){
                        $('#days_to_exam').text("uz je po");
                        })    
                } else {
                    $(document).ready(function(){
                        $('#days_to_exam').text(diffDays + 1);
                        })    
                }
                
                  
                }  
                
                
                    
            }
            
      });
  });

