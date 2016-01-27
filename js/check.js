
   
function getMessage(a, b){
   var sum = 0;
   var message = 0;
    
   if((typeof a) == "Boolean"){
       if(a == true){
           message = 'Я попал в' + ' ' + b;
       }
       else{
           message = 'Я никуда не попал';
       }
   }
   else(if((typeof a) == 'Number')){
       message = 'Я прыгнул на ' + '' + (a * 100) + 'сантиметров';
   }
   else(if((typeof a) == 'Object')){
       for(var i = 0; i < a.length; i++){
        var sum = sum + a[i]; 
     }
       message = 'Я прошел ' + sum + ' шагов';
   }
   else(if((typeof a == 'Object')) && ((typeof b)) == 'Object'){
       for(var n = 0; n < a.length && n < b.length; n++){
                sum = sum + (a[n]*b[n]);               
        }
       message = 'Я прошел ' + sum + 'метров'; 
   }            
   return message; 
};
