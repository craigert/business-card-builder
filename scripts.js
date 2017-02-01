//*******************************************************
//*****  Business Card Form Master Control Program  *****
//*******************************************************

(function($) {
    $(document).ready(function() {
			
		// No business card toggle event handler
		$('#inputNoCard').change(function() {
        if($(this).is(":checked")) {
            $('.businessCardForm').hide();
						$('.preview').hide();
            $('.noBusinessCardForm').show();
        }
			  else {
            $('.businessCardForm').show();
						$('.preview').show();
            $('.noBusinessCardForm').hide();
        }
    });
			
		// Sort Address Dropdown list alphabetically
		$("#inputCardAddress1").html($("#inputCardAddress1 option").sort(function (a, b) {
				return a.text == b.text ? 0 : a.text < b.text ? -1 : 1
		}));
			
		// Move "Choose...", "No Address", and "Custom" options up to the top of the select list
		$('#inputCardAddress1 option[value=""]').insertBefore('#inputCardAddress1 option[value="Bagmane Tech Park Unit No.4A, Level 3 Laurel Building, Block B C V Raman Nagar Banagalore 560 093"]');
		$('#inputCardAddress1 option[value="None"]').insertBefore('#inputCardAddress1 option[value="Bagmane Tech Park Unit No.4A, Level 3 Laurel Building, Block B C V Raman Nagar Banagalore 560 093"]');
		$('#inputCardAddress1 option[value="Custom"]').insertBefore('#inputCardAddress1 option[value="Bagmane Tech Park Unit No.4A, Level 3 Laurel Building, Block B C V Raman Nagar Banagalore 560 093"]');
			
	  // Make sure default value is set to "Choose..." option
		$("#inputCardAddress1").val('Choose...');
		
		// Allow preview to scroll with content as user scrolls
		$(window).scroll(function(){
			if ($(this).scrollTop() > 136) {
				$(".preview").addClass("fix-preview");
		  	} else {
				$(".preview").removeClass("fix-preview");
		  	}
		});

		$("#inputCardDoubleSided").change(function(){
			if (this.checked) {
				$("#languageInputs").show();
			}
			else {
				$("#languageInputs").hide();
			}
		});
		
		$("#inputCardFullname").keyup(function() {
    	$("#outputCardFullname").html($(this).val());
    });
		
		// Adds comma between name and certification in business card preview
    $("#inputCardCertification").keyup(function() {
    	$("#outputCardCertification").html($(this).val());
    });
		
		$("#inputCardTitle").keyup(function() {
    	$("#outputCardTitle").html($(this).val());
    });
			
		$("#inputCardTitle2").keyup(function() {
    	$("#outputCardTitle2").html($(this).val());
    });
			
		$("#inputCardTwitter").keyup(function() {
    	$("#outputCardTwitter").html($(this).val());
    });
		
		// Set default phone number format
		jQuery(function($){
			$("#inputCardPhone1").mask("(999) 999-9999");
		  $("#inputCardPhone2").mask("(999) 999-9999");
			$("#inputCardPhone3").mask("(999) 999-9999");
		});
		
		// Address select change event handler
		$("#inputCardAddress1").change(function() {
			if ($(this).val() != '') {
				
				$(".customAddress").hide();
				
				var address = $(this).val();
				
				if (address == "None") {
					address = "";
					$("#inputCardPhone1").unmask();
		   		$("#inputCardPhone2").unmask();
					$("#inputCardPhone3").unmask();
					$("#outputCardAddress1").css("display", "none");
				}
				else if (address == "Custom") {
					address = "";
					$("#inputCardPhone1").unmask();
		   		$("#inputCardPhone2").unmask();
					$("#inputCardPhone3").unmask();
					$(".customAddress").show();
				}
				else if (address == "698 West 10000 South Suite 500, South Jordan, Utah 84095") { 
					address = "698 West 10000 South Suite 500<br />South Jordan, Utah 84095";
					$("#inputCardPhone1").mask("(999) 999-9999");
		   		$("#inputCardPhone2").mask("(999) 999-9999");
					$("#inputCardPhone3").mask("(999) 999-9999");
				}
				else if (address == "8415 Explorer Drive, Suite 150 Colorado Springs, CO 80920") { 
					address = "8415 Explorer Drive, Suite 150<br />Colorado Springs, CO 80920";
					$("#inputCardPhone1").mask("(999) 999-9999");
		   		$("#inputCardPhone2").mask("(999) 999-9999");
					$("#inputCardPhone3").mask("(999) 999-9999");
				}
				else if (address == "8660 East Hartford Drive Suite 300 Scottsdale, AZ 85255") { 
					address = "8660 East Hartford Drive Suite 300<br />Scottsdale, AZ 85255";
					$("#inputCardPhone1").mask("(999) 999-9999");
		   		$("#inputCardPhone2").mask("(999) 999-9999");
					$("#inputCardPhone3").mask("(999) 999-9999");
				}
				else if (address == "Level 8, Suite 803 1 Elizabeth Plaza North Sydney New South Wales Australia 2060") { 
					address = "Level 8, Suite 803 1 Elizabeth Plaza North Sydney<br />New South Wales Australia 2060";
					$("#inputCardPhone1").mask("(999) 999-9999");
		   		$("#inputCardPhone2").mask("(999) 999-9999");
					$("#inputCardPhone3").mask("(999) 999-9999");
				}
				else if (address == "120 Robinson Road, Level 9 Singapore 068913") { 
					address = "120 Robinson Road, Level 9<br />Singapore 068913";
					$("#inputCardPhone1").mask("+99 (0)9999 999999");
					$("#inputCardPhone2").mask("+99 (0)9999 999999");
					$("#inputCardPhone3").mask("+99 (0)9999 999999");
				}
				else if (address == "Level 19 Tower E2 Oriental Plaza 1 East Chang An Avenue Dong Cheng District Beijing 100738, China") { 
					address = "Level 19 Tower E2 Oriental Plaza 1 East Chang An Avenue<br />Dong Cheng District Beijing 100738, China";
					$("#inputCardPhone1").mask("+99 999 999 9999");
					$("#inputCardPhone2").mask("+99 999 999 9999");
					$("#inputCardPhone3").mask("+99 999 999 9999");
				} 
				else if (address == "Bagmane Tech Park Unit No.4A, Level 3 Laurel Building, Block B C V Raman Nagar Banagalore 560 093") {
					address = "Bagmane Tech Park Unit No.4A, Level 3 Laurel Building,<br />Block B C V Raman Nagar Banagalore 560 093";
					$("#inputCardPhone1").mask("+99 99 9999 9999");
					$("#inputCardPhone2").mask("+99 99 9999 9999");
					$("#inputCardPhone3").mask("+99 99 9999 9999");
				}
				else if (address == "3rd Floor, Capitol Building Oldbury Bracknell Berkshire RG12 8FZ") {
					address = "3rd Floor, Capitol Building Oldbury<br />Bracknell Berkshire RG12 8FZ";
					$("#inputCardPhone1").mask("+99 99 9999 9999");
					$("#inputCardPhone2").mask("+99 99 9999 9999");
					$("#inputCardPhone3").mask("+99 99 9999 9999");
				}
				else if (address == "Carl-von-Linde-Straße 38 85716 Unterschleißheim Germany") {
					address = "Carl-von-Linde-Straße 38 85716<br />Unterschleißheim Germany";
					$("#inputCardPhone1").mask("+99 99 9 9999 9999");
					$("#inputCardPhone2").mask("+99 99 9 9999 9999");
					$("#inputCardPhone3").mask("+99 99 9 9999 9999");
				}
				else if (address == "Amtsgericht München HRB 130 111 USt-ID DE206 863 402 Gottlieb-Manz-Str. 10 70794 Filderstadt Germany") {
					address = "Amtsgericht München HRB 130 111 USt-ID DE206 863 402<br />Gottlieb-Manz-Str. 10 70794 Filderstadt Germany";
					$("#inputCardPhone1").unmask();
					$("#inputCardPhone2").unmask();
					$("#inputCardPhone3").unmask();
					$("#inputCardPhone1").val("+");
					$("#inputCardPhone2").val("+");
					$("#inputCardPhone3").val("+");
				}
				else if (address == "HEAT Software (Schweiz) AG c/o RevConsult Treuhand AG Baarerstrasse 75 Postfach 1535 6300 Zug") {
					address = "HEAT Software (Schweiz) AG c/o RevConsult Treuhand AG<br />Baarerstrasse 75 Postfach 1535 6300 Zug";
					$("#inputCardPhone1").unmask();
					$("#inputCardPhone2").unmask();
					$("#inputCardPhone3").unmask();
					$("#inputCardPhone1").val("+");
					$("#inputCardPhone2").val("+");
					$("#inputCardPhone3").val("+");
				}
				else if (address == "Lichtenauerlaan 102-120 3062 ME Rotterdam Postbus 4365 3006 AJ Rotterdam") {
					address = "Lichtenauerlaan 102-120 3062 ME Rotterdam Postbus<br />4365 3006 AJ Rotterdam";
					$("#inputCardPhone1").unmask();
					$("#inputCardPhone2").unmask();
					$("#inputCardPhone3").unmask();
				}
				else if (address == "Via San Francesco d’Assisi, 22 10121 Torino Italy") {
					address = "Via San Francesco d’Assisi, 22 10121 Torino Italy";
					$("#inputCardPhone1").mask("+99 999 9999999");
					$("#inputCardPhone2").mask("+99 999 9999999");
					$("#inputCardPhone3").mask("+99 999 9999999");
				}
				else if (address == "65 Rue des 3 Fontanot 92000 Nanterre France") {
					address = "65 Rue des 3 Fontanot 92000 Nanterre France";
					$("#inputCardPhone1").mask("+99 (0)9 99 99 99 99");
					$("#inputCardPhone2").mask("+99 (0)9 99 99 99 99");
					$("#inputCardPhone3").mask("+99 (0)9 99 99 99 99");
				}
				
				$("#outputCardAddress1").html(address);
				$("#outputCardAddress1").css("display", "inline-block");
                
        }
				else {
					$("#inputCardPhone1").unmask();
					$("#inputCardPhone2").unmask();
					$("#inputCardPhone3").unmask();
					$("#outputCardAddress1").css("display", "none");
				}
    });
		
		$("#inputCardEmail").keyup(function() {
    	$("#outputCardEmail").html($(this).val());
    });
		
		$("#inputCardSocial").keyup(function() {
    	$("#outputCardSocial").html($(this).val());
    });
		
		$("#inputCardPhone1").keyup(function() {
        if ($(this).val() != '') {
					var phoneType = $('#inputPhoneType1').val();
					if (phoneType == 'O') {
						$("#outputCardPhone1").html("O: " + $(this).val());
					}
					else if (phoneType == 'M') {
						$("#outputCardPhone1").html("M: " + $(this).val());
					}
					else if (phoneType == 'F') {
						$("#outputCardPhone1").html("F: " + $(this).val());
					}
        } else {
          $("#outputCardPhone1").html('');
        }
    });

    $("#inputCardPhone2").keyup(function() {
        if ($(this).val() != '') {
					var phoneType = $('#inputPhoneType2').val();
					if (phoneType == 'O') {
						$("#outputCardPhone2").html("O: " + $(this).val());
					}
					else if (phoneType == 'M') {
						$("#outputCardPhone2").html("M: " + $(this).val());
					}
					else if (phoneType == 'F') {
						$("#outputCardPhone2").html("F: " + $(this).val());
					}
        }
			  else { $("#outputCardPhone2").html(''); }
    });

    $("#inputCardPhone3").keyup(function() {
    		if ($(this).val() != '') {
					var phoneType = $('#inputPhoneType3').val();
					if (phoneType == 'O') {
						$("#outputCardPhone3").html("O: " + $(this).val());
					}
					else if (phoneType == 'M') {
						$("#outputCardPhone3").html("M: " + $(this).val());
					}
					else if (phoneType == 'F') {
						$("#outputCardPhone3").html("F: " + $(this).val());
					}
        } else {
          $("#outputCardPhone3").html('');
        }
    });
		
		$("#inputPhoneType1").change(function(){
			var phoneNumber = $("#inputCardPhone1").val();
			var phoneType = $(this).val();
			$("#outputCardPhone1").html(phoneType + ": " + phoneNumber);
		});
		
		$("#inputPhoneType2").change(function(){
			var phoneNumber = $("#inputCardPhone2").val();
			var phoneType = $(this).val();
			$("#outputCardPhone2").html(phoneType + ": " + phoneNumber);
		});
		
		$("#inputPhoneType3").change(function(){
			var phoneNumber = $("#inputCardPhone3").val();
			var phoneType = $(this).val();
			$("#outputCardPhone3").html(phoneType + ": " + phoneNumber);
		});
		
		$("#inputCardFullnameLanguage").keyup(function() {
    	$("#outputCardFullNameLanguage").html($(this).val());
   	});
		
		$("#inputCardCertificationLanguage").keyup(function() {
    	$("#outputCardCertificationLanguage").html($(this).val());
    });
		
		$("#inputCardTitleLanguage").keyup(function() {
    	$("#outputCardTitleLanguage").html($(this).val());
    });

		// Display back side of business card
        $(function() {
            $("#cardType").change(function() {
                $(".cardBackSide").toggle(this.checked);
            }).change(); //ensure visible state matches initially
        });

		// Handler for form input placeholders
        $('[placeholder]').focus(function() {
            var input = $(this);
            if (input.val() == input.attr('placeholder')) {
                input.val('');
                input.removeClass('placeholder');
            }
        }).blur(function() {
            var input = $(this);
            if (input.val() == '' || input.val() == input.attr('placeholder')) {
                input.addClass('placeholder');
                input.val(input.attr('placeholder'));
            }
        }).blur();
		
		// Get department value and store in hidden input field for Google spreadsheet
		$(".department").change(function() {
			var department = $(this).val();
			$('.departmentValue').val(department);
		});
		
		// Get address value and store in hidden input field for Google spreadsheet
		$(".address").change(function() {
			var address = $(this).val();
			$('.addressValue').val(address);
		});
		
		$(".customAddress").keyup(function() {
    	$("#outputCardAddress1").html($('#inputCustomAddress').val());
    });
			
		// Get phone type vales and store them in hidden input fields for Google spreadsheet
		$(".phonetype1").change(function() {
			var phonetype1 = $(this).val();
			$('.phone1TypeValue').val(phonetype1);
		});
		$(".phonetype2").change(function() {
			var phonetype2 = $(this).val();
			$('.phone2TypeValue').val(phonetype2);
		});
		$(".phonetype3").change(function() {
			var phonetype3 = $(this).val();
			$('.phone3TypeValue').val(phonetype3);
		});
		
		// Get number of cards value and store in hidden input field for Google spreadsheet
		var cards = $("#inputCards").val();
		$('.cardsValue').val(cards);
		
		$(".cards").change(function() {
			var cards = $(this).val();
			$('.cardsValue').val(cards);
		});
		
		// Get shirt size value and store in hidden input field for Google spreadsheet
		$(".shirt").change(function() {
			var shirt = $('#inputShirt').val();
			$('.shirtValue').val(shirt);
		});
		
		// Disable Submit until all required fields are filled out
		$('.frmSubmit').prop('disabled', true);
		
//		// Set the required fields value to blank so placeholder text doesn't interfere with required fields red toggle
		$(".businessCardForm .requiredField").each(function() {
			var input = $(this);
			if (input.val() == input.attr('placeholder')) {
			  input.val('');
			}
		});
		
		// Required fields change/keyup binding handler to enable Verify info checkbox once they are all filled out
		$(".businessCardForm .requiredField").bind("change keyup", function(event) {
			
			var requiredFieldsMet = false;
			
			var departmentValue = $('#inputDepartment').val();
			if (departmentValue == '') {
				$('#inputDepartment').addClass('required');
				requiredFieldsMet = false; 
			}
			else { 
				$('#inputDepartment').removeClass('required'); 
				requiredFieldsMet = true; 
			}
			
			var fullnameValue = $('#inputCardFullname').val();
			if (fullnameValue == '') {
				$('#inputCardFullname').addClass('required');
				requiredFieldsMet = false; 
			}
			else {
				$('#inputCardFullname').removeClass('required').removeClass('placeholder');
				if (requiredFieldsMet == false) {
				}
				else {
					requiredFieldsMet = true;
				}
			}
			
			var titleValue = $('#inputCardTitle').val();
			if (titleValue == '') {
				$('#inputCardTitle').addClass('required');
				requiredFieldsMet = false; 
			}
			else {
				$('#inputCardTitle').removeClass('required').removeClass('placeholder'); 
				if (requiredFieldsMet == false) {
				}
				else {
					requiredFieldsMet = true;
				}
			}
			
			var addressLocationValue = $('#inputCardAddress1').val();
			if (addressLocationValue == '') {
				$('#inputCardAddress1').addClass('required');
				requiredFieldsMet = false;
			}
			else {
				if (requiredFieldsMet == false) {
				}
				else {
					$('#inputCardAddress1').removeClass('required'); 
					requiredFieldsMet = true;
				}
			}
			
			var emailValue = $('#inputCardEmail').val();
			if (emailValue == '') {
				$('#inputCardEmail').addClass('required');
				requiredFieldsMet = false; 
			}
			else {
				$('#inputCardEmail').removeClass('required').removeClass('placeholder'); 
				if (requiredFieldsMet == false) {
				}
				else {
					requiredFieldsMet = true;
				}
			}
			
			var officeValue = $('#inputCardPhone1').val();
			if (officeValue == '') {
				$('#inputCardPhone1').addClass('required');
				requiredFieldsMet = false;
			}
			else {
				$('#inputCardPhone1').removeClass('required').removeClass('placeholder'); 
				if (requiredFieldsMet == false) {
				}
				else {
					requiredFieldsMet = true;
				}
			}
			
			var shirtsizeValue = $('#inputShirt').val();
			if (shirtsizeValue == '') {
				$('#inputShirt').addClass('required');
				requiredFieldsMet = false;
			}
			else {
				if (requiredFieldsMet == false) {
				}
				else {
					$('#inputShirt').removeClass('required'); 
					requiredFieldsMet = true;
				}
			}
			
			// Show or Hide "Verify Info" checkbox based on required fields being filled out
			if (requiredFieldsMet == true) {
				$('.verifyInfo').show();
			}
			else {
				$('.verifyInfo').hide();
			}
		});
		
		// Finally enable Submit button based on user verifying information is correct and checking this box
		$("#inputVerifyInfo").change(function(){
			if (this.checked) {
				$('input[type="submit"]').prop('disabled', false).removeClass('disabled');
			}
			else {
				$('.frmSubmit').prop('disabled', true).addClass('disabled');
			}
		});
		
		// Validate and process form
		$(function() {

			$(".frmSubmit").click(function() {
				
				if ($("#inputCardCertification").val() == "Certification") {
					$("#inputCardCertification").val('');
				}
				if ($("#inputCardFullnameLanguage").val() == "First Last") {
					$("#inputCardFullnameLanguage").val('');
				}
				if ($("#inputCardCertificationLanguage").val() == "Certification") {
					$("#inputCardCertificationLanguage").val('');
				}
				if ($("#inputCardTitleLanguage").val() == "Job Title") {
					$("#inputCardTitleLanguage").val('');
				}
				if ($("#inputCardTitle2").val() == "2nd Title") {
					$("#inputCardTitle2").val('');
				}
				if ($("#inputCardAddress1").val() == "Choose...") {
					$("#inputCardAddress1").val('');
				}
				if ($("#inputCardAddress1Language").val() == "Choose...") {
					$("#inputCardAddress1Language").val('');
				}
				if ($("#inputCardTwitter").val() == "twitter handle") {
					$("#inputCardTwitter").val('');
				}
				
				var phonetype1 = $(".phonetype1").val();
				$('.phone1TypeValue').val(phonetype1);
				
				var phonetype2 = $(".phonetype2").val();
				$('.phone2TypeValue').val(phonetype2);
				
				var phonetype3 = $(".phonetype3").val();
				$('.phone3TypeValue').val(phonetype3);
				
				// Store double-sided checkbox value
				var doubleSidedCard = $("#inputCardDoubleSided").is(':checked');
				if (doubleSidedCard == true) {
					$(".doubleSidedValue").val("Double Sided Card");
				}
				else { $(".doubleSidedValue").val("") }
				
				// Display Please Wait message while form is being submitted and display Thank You message
				$("#businessCardForm").validate({
					meta: "validate",
					submitHandler: function(form){
						var submitState = document.getElementById("ss-submit");
						submitState.value = "Please Wait";
						
						$('#loading_image').show();
						
						setTimeout( function () {
							$('#businessCardForm').toggle();
							form.submit();
							$('.hidden-message').show();
							$('.noCardToggle').hide();
						}, 1000);
						
					}
				});
			});
		});
			
		/*** NO BUSINESS CARD SECTION ***/
		// Get department value and store in hidden input field for Google spreadsheet
		$(".nodepartment").change(function() {
			var department = $(this).val();
			$('.noDepartmentValue').val(department);
		});
		
		// Get shirt size value and store in hidden input field for Google spreadsheet
		$(".noshirt").change(function() {
			var shirt = $('#inputNoShirt').val();
			$('.noShirtValue').val(shirt);
		});
			
		// Validate and process form
		$(function() {

			$(".frmNoSubmit").click(function() {
				
				if ($("#inputNoDepartment").val() == "Choose...") {
					$("#inputNoDepartment").val('');
				}
				if ($("#inputNoCardFullname").val() == "First Last") {
					$("#inputNoCardFullname").val('');
				}
				if ($("#inputNoShirt").val() == "Choose...") {
					$("#inputNoShirt").val('');
				}
				
				// Display Please Wait message while form is being submitted and display Thank You message
				$("#noBusinessCardForm").validate({
					meta: "validate",
					submitHandler: function(form){
						var submitState = document.getElementById("no-ss-submit");
						submitState.value = "Please Wait";
						
						$('#loading_image1').show();
						
						setTimeout( function () {
							$('#noBusinessCardForm').toggle();
							form.submit();
							$('.hidden-message1').show();
							$('.noCardToggle').hide();
						}, 1000);
						
					}
				});
			});
		});

	});
	
})(jQuery);