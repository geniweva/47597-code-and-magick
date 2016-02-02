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
       myBut.disabled = "true";  // блокирую отправку
       var fieldName = ('#review-name'); //нахожу поле имя
       var fieldText = document.querySelector('#review-text');  //нахожу textarea;
       var fieldBlock = document.querySelector('.review-fields');//нахожу блок с полями - имя и отзывы
       var elem_1 = document.querySelector('#review-mark-1'); //нахожу оценку 1
       var elem_2 = document.querySelector('#review-mark-2'); //нахожу оценку 2
       var elems = document.querySelectorAll('.review-mark-label'); //нахожу все пять оценок 
      
       if(fieldName != null && fieldText != null){            //если поле имя и поле textarea заполнены, то разблокируем кнопку добавить отзывы
           myBut.disabled = "false";                          //и удаляем классы у полей - имя и отзывы.
           fieldBlock.removeClass('.review-fields-name');
           fieldBlock.removeClass('.review-fields-text');
       }
//       if(fieldName == null && (elem_1 == 1 || elem_2 == 2) ){      //если поле имя не заполнено, то textarea делаем обязательным
//           fieldText.required = "true";
//           fieldBlock.addClass('.review-fields-name');        //и добавляем поле имя  
//           fieldBlock.addClass('.review-fields-text');     //и добавляем поле отзыв
//       }
       
         for(var i = 0; i < elems.length; i++){                                                          // перебираю все оценки 
              elems[i].onclick = function(){                                                              // если 1-й элемент =1 или =2 и поле текст пусто
                 if( (elems[i] == elem_1 && fieldText == null) || (elems[i] == elem_2 && fieldText == null) ){   // то поле текст становится обязательным
                      fieldText.required = "true"; 
                  }else {
                      fieldText.required = "false";                                                        // в противном случае снимаем обязательность поля
                      myBut.disabled = "false";                                                             // и даем возможность отправить   
                      fieldBlock.addClass('.review-fields-name');      //и добавляем поле имя  
                      fieldBlock.addClass('.review-fields-text');     //и добавляем поле отзыв
                  
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
  
      
      