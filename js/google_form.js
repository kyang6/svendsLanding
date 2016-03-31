
function postContactToGoogle() {
    var email = $('#email').val();
    var name = $('#name').val();

   

        $.ajax({
            url: "https://docs.google.com/a/stanford.edu/forms/d/1xBCPDYj1MOsnz_5ZRr74NtpPaqZE_UjXFAZZAc0IPN0/formResponse",
            data: { "entry.71552653": name,
            "entry.1806799664": email },
            type: "POST",
            dataType: "xml",
            statusCode: {
                0: function () {
                    $('h4.modal-title').text('Thank You for Signing Up!');
                },
                200: function () {
                     $('h4.modal-title').text('Thank You for Signing Up!');
                }
            }
        });
}
