
// Строгмй метод
'use strict';

// getMessage(a:*, b:*=):string
function getMessage( a, b ) {

	var message;
	var sum = 0;
	var i;

	if ( ( typeof a ) === 'boolean' ) {
        
		if ( a ) {
			message = 'Я попал в ' + b;

		} else {

			message = 'Я никуда не попал';
		}

	} else if ( ( typeof a ) === 'number' ) {

		message = 'Я прыгнул на ' + (a * 100) + ' сантиметров';

	} else if ( Array.isArray( a ) && Array.isArray( b ) ) {
        
		for ( i = 0; i < a.length && i < b.length; i++ ) {
			sum += ( a[i] * b[i] );
		}
		message = 'Я прошёл ' + sum + ' метров';

	} else if ( Array.isArray( a ) ) {

		for ( i = 0 ; i < a.length; i++ ) {
			sum += a[i];
		}

		message = 'Я прошёл ' + sum + ' шагов';
	}

	return message;
}

