$(function(){

  // grab their email address, put it into the google doc email
  // form element and subit the form in the iframe
  
  // minimal validation - just look for @  
  $('#email input[type=email]').keyup(function(){    
    if ($(this).val().match(/@/)) {
      $('#email input[type=submit]').attr('disabled', false);
    }
  });
  $('#email input[type=submit]').click(function(){
    // copy email address
    $('#entry_0', window.top.frames[0].document).val($('#email').val()); 
    
    // submit the form
    //$('#email-form input[type=submit]', window.top.frames[0].document).click();

    // we'll just assume that it got posted
    $('#email input').hide();
    $('#email .thanks').fadeIn();
  });
  
});
