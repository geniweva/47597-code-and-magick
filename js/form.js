'use strict';

(function() {
  var formContainer = document.querySelector('.overlay-container');
  var formOpenButton = document.querySelector('.reviews-controls-new');
  var formCloseButton = document.querySelector('.review-form-close');

  formOpenButton.onclick = function(evt) {
    evt.preventDefault();
    formContainer.classList.remove('invisible'); 
 //мой код 
     var myBut = document.querySelector('.review-form-control'); // находим кнопку
     myBut.disabled = "true";
     var elem_1 = document.querySelector('#review-mark-1'); //нахожу оценку 1
     var elem_2 = document.querySelector('#review-mark-2'); //нахожу оценку 2
     var myText = document.querySelector('#review-text');  //нахожу textarea;
    // var fieldName = document.querySelector('.review-fields-name'); // нахожу поля имя и отзыв
    // var fieldV = document.querySelector('.review-fields-text');  
      
     var elems = document.querySelectorAll('.review-mark-label'); //нахожу все пять оценок 
      
    if(document.querySelector('#review-name') == null){                                              //если поле имя пусто, то textarea - обязателен
        myText.required = "true";
    }else{
        myText.requerd = "false";                                                                     // в противном случае
        document.removeClass('.review-fields-name');                                                  //удаляем поле имя
    }   
      
      
      for(var i = 0; i < elems.length; i++){                                                          // перебираю все оценки 
          elems[i].onclick = function(){                                                              // если 1-й элемент =1 или =2 и поле текст пусто
              if( (elems[i] == elem_1 && myText == null) || (elems[i] == elem_2 && myText == null) ){   // то поле текс становится обязательным
                  myText.required = "true"; 
              }else {
                  myText.required = "false";                                                            // в противном случае снимаем обязательность поля
                  myBut.disabled = "false";                                                             // и даем возможность отправить   
              }           
          }
      }
      
    
//конец моего кода  
  
  };

  formCloseButton.onclick = function(evt) {
    evt.preventDefault();
    formContainer.classList.add('invisible');
  };
    
    
    
    
    
})();
  
      
      