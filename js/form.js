'use strict';

(function() {
  var formContainer = document.querySelector('.overlay-container');
  var formOpenButton = document.querySelector('.reviews-controls-new');
  var formCloseButton = document.querySelector('.review-form-close');

  formOpenButton.onclick = function(evt) {
    evt.preventDefault();
    formContainer.classList.remove('invisible'); 
  };
    var myBut = document.querySelector('.review-form-control');
    var leftText = document.querySelector('.review-fields-text');
    var leftName = document.querySelector('.review-fields-name');
    var elems = document.querySelectorAll('.review-mark-label');
    var fieldName = document.querySelector('#review-name');
    var fieldText = document.querySelector('#review-text');
    
    
    myBut.disabled = 'true';
    fieldName.required = 'true';
    leftText.classList.add('invisible');
    
    for (var i = 0; i < elems.length; i++){
          elems[i].onclick = function(){
            var rating = this.innerHTML;
            if(rating < 3){
                if(!validText() ){
                    leftText.classList.remove('invisible');
		     myBut.disabled = 'true';	
		     fieldText.required = 'true'; 		
            	 
                }
		if(!validName() ){
                    leftName.classList.remove('invisible');
            	    myBut.disabled = 'true';	
                }     
            }          
               else if(rating >= 3){             
			leftText.classList.add('invisible');
			leftName.classList.remove('invisible');					                                         
                }       
          }      
   }
    
fieldName.oninput = function(){
    leftName.classList.add('invisible');
    myBut.removeAttribute('disabled');
}

fieldText.oninput = function(){
    leftText.classList.add('invisible');
    myBut.removeAttribute('disabled');
}	  

function validName() {
    if(fieldName.value === ''){
        return false;
    } else {
        return true;
    }
}
    
function validText() {
    if(fieldText.value === ''){
        return false;
    } else {
        return true;
    }
}

myBut.onsubmit = function(event){
     event.preventDefault();
    var birthday = new Date('2016-01-07');
    //var dayNow = new Date();
    var dateExpire = +new Date() + (+new Date() - birthday)/24/60/60/1000; // от сегодняшней даты + кол-во дней от ближайшего дня рожд до сегодняшнего дня (дата в милсек)
    var formatDateExpire = new Date(dateExpire).toUTCString();
    
    document.cookie = 'userName=' + fieldName.value + ';expires=' + formatDateExpire;
    myBut.submit();
}    
    
    fieldName.value = docCookies.getItem('fieldName');
    
    
    
  formCloseButton.onclick = function(evt) {
    evt.preventDefault();
    formContainer.classList.add('invisible');
  };
    
    
    
    
    
})();