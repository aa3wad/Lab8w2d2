"use strict";
$('[type=button]').click(function() { 
    const email = $("#email").val();
    const password = $("#password").val();
    const website = $('[name=website]').val();

    console.log(email);
    console.log(password);
    console.log(website);
    
});

