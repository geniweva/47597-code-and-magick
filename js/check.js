
function getMessage(a, b) {
    var resultType = typeof a;
    var resultType_2 = typeof b; 
    var sum = 0; var itog = 0;
    var distance = 0;
    
   if(resultType == typeof 0) {
       alert('Я прыгнул на ' + '' + (a * 100) + ' см');
   }
    else if(resultType == typeof true){
        if(a == true){
            alert('Я попал в ' + b);
        }
        else if(a == false){
             alert('Я никуда не попал');
        }           
    }
    else if(resultType == typeof{} && resultType_2 != typeof{}){
        for(var i = 0; i < a.length; i++){
            var sum = sum + a[i]; 
         }
        alert('Я прошел ' + '' + sum + '' + ' шагов'); 
    }   
    else if(resultType == typeof{} && resultType_2 == typeof{}){
        for(var n = 0; n < a.length && n < b.length; n++){
                distance = distance + (a[n]*b[n]);               
        }
        alert('Я прошел ' + '' + distance + ' метров');
        
    }     
}   

getMessage([10,20,30], [10,20,30]);