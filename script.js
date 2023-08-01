document.addEventListener('DOMContentLoaded', function() {
    
    let a='0' , b='0', i, j, output=0, currentaction;
    i=0;
    j=0;
    //getting values from buttons
    const button0 = document.getElementById('zero');
    const button1 = document.getElementById('one');
    const button2 = document.getElementById('two');
    const button3 = document.getElementById('three');
    const button4 = document.getElementById('four');
    const button5 = document.getElementById('five');
    const button6 = document.getElementById('six');
    const button7 = document.getElementById('seven');
    const button8 = document.getElementById('eight');
    const button9 = document.getElementById('nine');
    const equal=document.getElementById('equal');
    const minus=document.getElementById('minus');
    const plus=document.getElementById('plus');
    const X=document.getElementById('X');
    const slash=document.getElementById('slash');
    const invert=document.getElementById('invert');
    result = document.getElementById('result');
    isActionSelected=false;
    const buttonarray=[button0, button1, button2, button3, button4, button5, button6, button7, button8, button9]
    const actionsarray=[plus, minus, X, slash];
    // 
    result.innerHTML=0;
    buttonarray.forEach(function(button) {
        button.addEventListener('click', function() {
          // Przechwytujemy tekst z klikniętego przycisku
          const buttonText = button.innerText; 
          if(i==0){
            if(j==0){
                a=buttonText; 
                result.innerText = a;               
                j++;
                console.log("A= "+a);
            }else{
                a=a+buttonText; 
                result.innerText = a;
                console.log("A= "+a);
            }          
           // j=0;
          } else{                
                if(j==0){
                    b='';
                    b=buttonText;  
                    result.innerText = b;  
                    console.log("B= "+b+" J= "+j);            
                    j++;
                    
                }else{
                  let k=0;
                  if(k==0){
                    b='';
                    b=b+buttonText; 
                    result.innerText = b;
                    console.log("B= "+b+" J= "+j); 
                    k++;
                  }else if(i>0){
                    b=b+buttonText; 
                    result.innerText = b;
                    console.log("B= "+b+" J= "+j); 
                  }
                } 
           
          }
          if(i==2){            
            i=0;
          }       
          });      
      });

      actionsarray.forEach(function(button){
        button.addEventListener('click', function(){
            i++;
            currentaction=button.innerText;
            console.log(currentaction);            
            
              a=parseInt(a);
              b=parseInt(b);
              if(!isNaN(a)&&!isNaN(b)){
              if(currentaction=="+"){
                  output=a+b;
                  result.innerText=output;   
                  console.log(typeof(output));         
                }
                if(currentaction=="-"){                
                  output=a-b;
                  result.innerText=output;   
                  console.log(typeof(output));   
                    }
                if(currentaction=="X"){
                  output=a*b;
                  result.innerText=output;   
                  console.log(typeof(output));  
                }
                if(currentaction=="/"){
                  output=a/b;
                  result.innerText=output;   
                  console.log(typeof(output));  
                }
                a=output;
                b=0;
              }
        });

      }); 

      C.addEventListener('click', function(){
          result.innerHTML='';
          a='';
          b='';
          i=0;
        }) 
        
      invert.addEventListener('click', function(){
          if(i==0){
             a=a*(-1);
             result.innerHTML=a; 
             console.log(a);
          }           
          if(i==1) {
            b=b*(-1);
            result.innerHTML=b;
            console.log(b);
          }
      })  

      equal.addEventListener('click', function(){
            a=parseInt(a);
            b=parseInt(b);
            if(i==1){
              if(currentaction=="+"){
              result.innerText=a+b;   
              console.log(result);         
              }
              if(currentaction=="-"){                
                  result.innerText=a-b;

                  }
              if(currentaction=="X"){
              result.innerText=a*b;
              }
              if(currentaction=="/"){
                  result.innerText=a/b;
              }
            }
        });
    
      
        
})