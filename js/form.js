'use strict';

(function() {
  var formContainer = document.querySelector('.overlay-container');
  var formOpenButton = document.querySelector('.reviews-controls-new');
  var formCloseButton = document.querySelector('.review-form-close');

  formOpenButton.onclick = function(evt) {
    evt.preventDefault();
    formContainer.classList.remove('invisible'); 
 //мой код 
      
      var elem_1 = document.querySelector('#review-mark-1').value;
      var elem_2 = document.querySelector('#review-mark-2').value;
      var elemText = document.querySelector('#review-text'); 
      
      if(elemText.value == null && elem_1 == 1){
           elemTest.setAttribute('required', 'required');
      }else if(elemText.value == null && elem_2 == 2){
          elemTest.setAttribute('required', 'required');
      }
      
      
         
  
      
      
// Никак не могу вообще просто добавить required
      
      
      
  // А это первые тоже неработающие версии    
//      
//     for (var j = 0; j < elemForm.length; j++){
//         elemForm[j].onclick = function(){
//            if(elem == nul || elem = ''){
//                var elemText = document.querySelector('#review-text');
//                elemText.innerHTML = required; 
//                alert('Заполните поле текст');
//                return false;
//            }    
//         }      
//      }
//      
    
      
      
      //var elem = document.getElementsByName('review-mark');      
      //elem = Array.prototype.slice.call(elem);
      
//      for(var j = 0; j < elem.length; j++){
//         elem[j].onclick = function(){ 
//          
//          var elemValue = elem[j].value;
//          if(elemValue == elem[0].getAttribute('value')){
//              alert('я первая кнопка' + '' + elemValue);
//              
//          }
//          else if(elemValue == elem[1].getAttribute('value')){
//              alert('я вторая  кнопка' + '' + elemValue);
//          }
//             return;
//         }
//      }
            
     
//конец моего кода  
  
  };

  formCloseButton.onclick = function(evt) {
    evt.preventDefault();
    formContainer.classList.add('invisible');
  };
    
    
    
    
    
})();
  
      
      