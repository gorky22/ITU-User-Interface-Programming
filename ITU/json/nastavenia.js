var x ;
for (let i = 0; i < localStorage.length; i++) {
    
    const a = JSON.parse(localStorage.getItem(localStorage.key(i)));

        if(a.is == "true") {
            x = localStorage.key(i);
          for (let i = 0 ; i <= 17; i++) {

            $(document).ready(function(){
                $("#"+i).text(a.otazka[i].good);
                $("#"+i*10).text(a.otazka[i].bad);
                })    

                if(a.otazka[i].show == "true") {
                    $(document).ready(function(){
                        $("."+(i + 1)).text("obnovit otazku");
                        })    
                  } else {
                     $("."+(i + 1)).text("nedavat pri dalsich testoch");
                  }
          }
          
          
          
        
        }    
            
    }


    

    $(document).ready(function(){
        $(".1").click(function() {
            const a = JSON.parse(localStorage.getItem(x));

            if(a.otazka[0].show == "false") {
                a.otazka[0].show = "true"
                $(".1").text("obnovit otazku")
                myjs = JSON.stringify(a);
                localStorage.setItem(x,myjs);
     
            } else if (a.otazka[0].show == "true"){
                a.otazka[0].show = "false"
                $(".1").text("nedavat na dalsich testoch")
                myjs = JSON.stringify(a);
                localStorage.setItem(x,myjs);
            }
            
        });
    }) 
    

  
    $(document).ready(function(){
        $(".2").click(function() {
            const a = JSON.parse(localStorage.getItem(x));
       
            if(a.otazka[1].show == "false") {
                a.otazka[1].show = "true"
                $(".2").text("obnovit otazku")
                myjs = JSON.stringify(a);
                localStorage.setItem(x,myjs);
     
            } else if (a.otazka[1].show == "true"){
                a.otazka[1].show = "false"
                $(".2").text("nedavat na dalsich testoch")
                myjs = JSON.stringify(a);
                localStorage.setItem(x,myjs);
            }
            
        });
    }) 

   
    

   
    $(document).ready(function(){
        $(".3").click(function() {
            const a = JSON.parse(localStorage.getItem(x));
            
            if(a.otazka[2].show == "false") {
                a.otazka[2].show = "true"
                $(".3").text("obnovit otazku")
                myjs = JSON.stringify(a);
                localStorage.setItem(x,myjs);
     
            } else if (a.otazka[2].show == "true"){
                a.otazka[2].show = "false"
                $(".3").text("nedavat na dalsich testoch")
                myjs = JSON.stringify(a);
                localStorage.setItem(x,myjs);
            }
            
        });
    }) 

    
    $(document).ready(function(){
        $(".4").click(function() {
            const a = JSON.parse(localStorage.getItem(x));
            
            if(a.otazka[3].show == "false") {
                a.otazka[3].show = "true"
                $(".4").text("obnovit otazku")
                myjs = JSON.stringify(a);
                localStorage.setItem(x,myjs);
     
            } else if (a.otazka[3].show == "true"){
                a.otazka[3].show = "false"
                $(".4").text("nedavat na dalsich testoch")
                myjs = JSON.stringify(a);
                localStorage.setItem(x,myjs);
            }
            
        });
    }) 

    
    $(document).ready(function(){
        $(".5").click(function() {
            const a = JSON.parse(localStorage.getItem(x));
            
            if(a.otazka[4].show == "false") {
                a.otazka[4].show = "true"
                $(".5").text("obnovit otazku")
                myjs = JSON.stringify(a);
                localStorage.setItem(x,myjs);
     
            } else if (a.otazka[4].show == "true"){
                a.otazka[4].show = "false"
                $(".5").text("nedavat na dalsich testoch")
                myjs = JSON.stringify(a);
                localStorage.setItem(x,myjs);
            }
            
        });
    }) 
    
    $(document).ready(function(){
        $(".6").click(function() {
            const a = JSON.parse(localStorage.getItem(x));
            
            if(a.otazka[5].show == "false") {
                a.otazka[5].show = "true"
                $(".6").text("obnovit otazku")
                myjs = JSON.stringify(a);
                localStorage.setItem(x,myjs);
     
            } else if (a.otazka[5].show == "true"){
                a.otazka[5].show = "false"
                $(".6").text("nedavat na dalsich testoch")
                myjs = JSON.stringify(a);
                localStorage.setItem(x,myjs);
            }
            
        });
    }) 

    
    $(document).ready(function(){
        $(".7").click(function() {
            const a = JSON.parse(localStorage.getItem(x));
            
            if(a.otazka[6].show == "false") {
                a.otazka[6].show = "true"
                $(".7").text("obnovit otazku")
                myjs = JSON.stringify(a);
                localStorage.setItem(x,myjs);
     
            } else if (a.otazka[6].show == "true"){
                a.otazka[6].show = "false"
                $(".7").text("nedavat na dalsich testoch")
                myjs = JSON.stringify(a);
                localStorage.setItem(x,myjs);
            }
            
        });
    }) 

   
    $(document).ready(function(){
        $(".8").click(function() {
            const a = JSON.parse(localStorage.getItem(x));
            
            if(a.otazka[7].show == "false") {
                a.otazka[7].show = "true"
                $(".8").text("obnovit otazku")
                myjs = JSON.stringify(a);
                localStorage.setItem(x,myjs);
     
            } else if (a.otazka[7].show == "true"){
                a.otazka[7].show = "false"
                $(".8").text("nedavat na dalsich testoch")
                myjs = JSON.stringify(a);
                localStorage.setItem(x,myjs);
            }
            
        });
    }) 

    $(document).ready(function(){
        $(".9").click(function() {
            const a = JSON.parse(localStorage.getItem(x));
         
            if(a.otazka[8].show == "false") {
                a.otazka[8].show = "true"
                $(".9").text("obnovit otazku")
                myjs = JSON.stringify(a);
                localStorage.setItem(x,myjs);
     
            } else if (a.otazka[8].show == "true"){
                a.otazka[8].show = "false"
                $(".9").text("nedavat na dalsich testoch")
                myjs = JSON.stringify(a);
                localStorage.setItem(x,myjs);
            }
            
        });
    }) 
    
    $(document).ready(function(){
        $(".10").click(function() {
            const a = JSON.parse(localStorage.getItem(x));
        
            if(a.otazka[9].show == "false") {
                a.otazka[9].show = "true"
                $(".10").text("obnovit otazku")
                myjs = JSON.stringify(a);
                localStorage.setItem(x,myjs);
     
            } else if (a.otazka[9].show == "true"){
                a.otazka[9].show = "false"
                $(".10").text("nedavat na dalsich testoch")
                myjs = JSON.stringify(a);
                localStorage.setItem(x,myjs);
            }
            
        });
    }) 

    
    $(document).ready(function(){
        $(".11").click(function() {
            const a = JSON.parse(localStorage.getItem(x));
         
            if(a.otazka[10].show == "false") {
                a.otazka[10].show = "true"
                $(".11").text("obnovit otazku")
                myjs = JSON.stringify(a);
                localStorage.setItem(x,myjs);
     
            } else if (a.otazka[10].show == "true"){
                a.otazka[10].show = "false"
                $(".11").text("nedavat na dalsich testoch")
                myjs = JSON.stringify(a);
                localStorage.setItem(x,myjs);
            }
            
        });
    }) 

    
    $(document).ready(function(){
        $(".12").click(function() {
            const a = JSON.parse(localStorage.getItem(x));
       
            if(a.otazka[11].show == "false") {
                a.otazka[11].show = "true"
                $(".12").text("obnovit otazku")
                myjs = JSON.stringify(a);
                localStorage.setItem(x,myjs);
     
            } else if (a.otazka[11].show == "true"){
                a.otazka[11].show = "false"
                $(".12").text("nedavat na dalsich testoch")
                myjs = JSON.stringify(a);
                localStorage.setItem(x,myjs);
            }
            
        });
    }) 

    
    $(document).ready(function(){
        $(".13").click(function() {
            const a = JSON.parse(localStorage.getItem(x));
       
            if(a.otazka[12].show == "false") {
                a.otazka[12].show = "true"
                $(".13").text("obnovit otazku")
                myjs = JSON.stringify(a);
                localStorage.setItem(x,myjs);
     
            } else if (a.otazka[12].show == "true"){
                a.otazka[12].show = "false"
                $(".13").text("nedavat na dalsich testoch")
                myjs = JSON.stringify(a);
                localStorage.setItem(x,myjs);
            }
            
        });
    }) 

    
    $(document).ready(function(){
        $(".14").click(function() {
            const a = JSON.parse(localStorage.getItem(x));

            if(a.otazka[13].show == "false") {
                a.otazka[13].show = "true"
                $(".14").text("obnovit otazku")
                myjs = JSON.stringify(a);
                localStorage.setItem(x,myjs);
     
            } else if (a.otazka[13].show == "true"){
                a.otazka[13].show = "false"
                $(".14").text("nedavat na dalsich testoch")
                myjs = JSON.stringify(a);
                localStorage.setItem(x,myjs);
            }
            
        });
    }) 

    
    $(document).ready(function(){
        $(".15").click(function() {
            const a = JSON.parse(localStorage.getItem(x));
    
            if(a.otazka[14].show == "false") {
                a.otazka[14].show = "true"
                $(".15").text("obnovit otazku")
                myjs = JSON.stringify(a);
                localStorage.setItem(x,myjs);
     
            } else if (a.otazka[14].show == "true"){
                a.otazka[14].show = "false"
                $(".15").text("nedavat na dalsich testoch")
                myjs = JSON.stringify(a);
                localStorage.setItem(x,myjs);
            }
            
        });
    }) 

    
    $(document).ready(function(){
        $(".16").click(function() {
            const a = JSON.parse(localStorage.getItem(x));
            
            if(a.otazka[15].show == "false") {
                a.otazka[15].show = "true"
                $(".16").text("obnovit otazku")
                myjs = JSON.stringify(a);
                localStorage.setItem(x,myjs);
     
            } else if (a.otazka[15].show == "true"){
                a.otazka[15].show = "false"
                $(".16").text("nedavat na dalsich testoch")
                myjs = JSON.stringify(a);
                localStorage.setItem(x,myjs);
            }
            
        });
    }) 

    $(document).ready(function(){
        $(".17").click(function() {
            const a = JSON.parse(localStorage.getItem(x));
            
            if(a.otazka[16].show == "false") {
                a.otazka[16].show = "true"
                $(".17").text("obnovit otazku")
                myjs = JSON.stringify(a);
                localStorage.setItem(x,myjs);
     
            } else if (a.otazka[16].show == "true"){
                a.otazka[16].show = "false"
                $(".17").text("nedavat na dalsich testoch")
                myjs = JSON.stringify(a);
                localStorage.setItem(x,myjs);
            }
            
        });
    }) 


