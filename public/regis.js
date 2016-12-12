$(function () {
    $('#register').on('click', function () {
        $.ajax({
            url: 'register',
            method: 'post',
            data: {
                account: $('#acc').val(),
                password: $('#pass').val()
            },
            dataType: 'json',
            success: function (data, status, xhr) {
                console.log(data);
                window.location.href='login.html'
            },
            error: function (xhr, status, error) {
                console.log(error);
            }
        });
    });
});