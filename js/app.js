$(document).ready(function() {
	'use strict';
	var contacts = [];

	$('body').on('click', '.add', function() {
		varifyInputs();
		console.log(contacts[0]);
		console.log(contacts[0].firstName);
		console.log(contacts[0].lastName);
		console.log(contacts[0].phone);
		console.log(contacts[0].street);
		console.log(contacts[0].city);
		console.log(contacts[0].state);

	});

	function varifyInputs() { 
		contacts.push({firstName: $('#firstName').val(), lastName: $('#lastName').val(), phone: $('#phone').val(), street: $('#street').val(), city: $('#city').val(), state: $('#state').val()});	
	}


});