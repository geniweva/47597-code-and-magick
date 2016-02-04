'use strict';

(function() {
  var formContainer = document.querySelector('.overlay-container');
  var formOpenButton = document.querySelector('.reviews-controls-new');
  var formCloseButton = document.querySelector('.review-form-close');

  formOpenButton.onclick = function(evt) {
    evt.preventDefault();
    formContainer.classList.remove('invisible'); 
 //мой код 
      var myBut = document.querySelector('.review-form-control');
      var elems = document.querySelectorAll('.review-mark-label'); //нахожу все пять оценок 
      var elem_1 = document.querySelector('#review-mark-1'); // нахожу 1-й элемент
      var elem_2 = document.querySelector('#review-mark-2'); // нахожу 2-й элемент
      myBut.disabled = "true";
      var fieldName = document.querySelector('#review-name'); //нахожу поле имя
      var fieldText = document.querySelector('#review-text');  //нахожу textarea; 
      fieldName.required = "true";
      
      
     
     if(fieldName.value !== "" && fieldText.value !== ""){
          document.querySelector('.review-fields').style.display='none';
          myBut.removeAttribute("disabled");
      }
      if( (fieldName.value !== "") && (document.querySelector('.review-fields-name').display="block") ){
          document.querySelector('.review-fields-name').style.display="none";
      }else if( (fieldName.value == "") && (document.querySelector('.review-fields-name').display="none") ){
          document.querySelector('.review-fields-name').style.display="block";
      }
      if( (fieldText.value !== "") && (document.querySelector('.review-fields-text').display="block") ){
          document.querySelector('.review-fields-text').style.display="none";
      }else if( (fieldText.value == "") && (document.querySelector('.review-fields-text').display="none") ){
          document.querySelector('.review-fields-text').style.display="block";
      }
      for (var i = 0; i < elems.length; i++){
          elems[i].onclick = function(){
              if(elems[i].innerText == elem_1.value || elems[i].innerText == elem_2.value){
                 fieldText.required = "true";          
              }else{
                fieldText.required = "false";    
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
  
      
      