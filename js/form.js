'use strict';

(function() {
  var formContainer = document.querySelector('.overlay-container');
  var formOpenButton = document.querySelector('.reviews-controls-new');
  var formCloseButton = document.querySelector('.review-form-close');

  formOpenButton.onclick = function(evt) {
    evt.preventDefault();
    formContainer.classList.remove('invisible');
      //мой код
    
     var myBut = document.querySelector('.review-form-control'); //нахожу кнопку добавить отзыв
     myBut.disabled = "true"; //блокирую
      
     var myElem = document.querySelector('.review-mark-label'); // нахожу  все label (1,2,3,4,5)
     var myText = document.querySelector('#review-text'); //нахожу textarea
     var elem_1 = document.querySelector('#review-mark-1');  //оценка 1
     var elem_2 = document.querySelector('#review-mark-2'); // оценка 2
     var fields_1 = $('.review-fields-name');// нахожу поле имя
     var fields_2 = $('.review-fields-text');// нахожу поле отзыв
      
      if(document.querySelector('#review-name') == null){               //если поле имя не заполнено
          document.querySelector('#review-name').required = "true";     //добавляю атрибут required, т.е делаю обязательным
      }else {
          fields_1.removeClass('.review-fields-name');                  // в противном случае, т.е если заполнено удаляю класс из поля имя
      }
      
     for(var i = 0; i < myElem.length; i++){
         myElem[i].onclick = function(){
            if( (elem_1 =1 && myText = null) || (elem_2 = 2 && myText = null) ){     // Я имела ввиду, что перебирая в цикле оценки 1,2,3,4,5
                  myText.required = "true";                                          // если на первом клике встречаю 1 или 2 , то делаю обязательным 
             }else{                                                                  //texterea , в противном случае снимаю обязательнось заполнения и 
                 myText.required = "false";                                          // убираю с кнопки невозможность ее отправить 
                 myBut.disabled = "false";
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
