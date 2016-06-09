$(document).ready(function() {
	'use strict';
	var contacts = [];

	$('body').on('click', '.add', function() {
		valaidateInputs();
	})
	.on('click', 'li', function() {
		generateCurrentContact($(this).html());
	});

	function valaidateInputs() {
		var contactInfo = collectInputs();
		for (var i = 0; i < contactInfo.length; i++) {
			if (contactInfo[i] == '') {
				alert('Please fill in all fields.');
				return false;
			}
		}
		createNewContact(contactInfo);
		$('.contactInfo').val('');
	}

	// collects Inputs
	function collectInputs() {
		var contactInfo = [$('#firstName').val(), $('#lastName').val(), $('#phone').val(), $('#street').val(), $('#city').val(), $('#state').val()];
		return contactInfo;
	}

	// create new contact
	function createNewContact(contactInfo) {
		var newContact = {firstName: contactInfo[0], lastName: contactInfo[1], phone: contactInfo[2], street: contactInfo[3], city: contactInfo[4], state: contactInfo[5]};
		contacts.push(newContact);
		updateContactList();
	}

	// updates contact list
	function updateContactList() {
		$('ul').empty();
		for (var i = 0; i < contacts.length; i++) {
			$('ul').append('<li>' + contacts[i].firstName + ' ' + contacts[i].lastName + '</li>')
		}
	}

	// generates selected Contact in the Current Contact area
	function generateCurrentContact(name) {
		for (var i = 0; i < contacts.length; i++) {
			if (name == (contacts[i].firstName + ' ' + contacts[i].lastName)) {
				$('.fullName').text(contacts[i].firstName + ' ' + contacts[i].lastName)
				$('.firstName').text(contacts[i].firstName)
				$('.lastName').text(contacts[i].lastName)
				$('.phone').text(contacts[i].phone)
				$('.street').text(contacts[i].street)
				$('.city').text(contacts[i].city)
				$('.state').text(contacts[i].state)
			}
		}
	}

});