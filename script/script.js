document.addEventListener('DOMContentLoaded', function() {
    var signUpButton = document.getElementById('signUpButton');

    signUpButton.addEventListener('click', function() {
        console.log('Sign Up button clicked!');
    });
});

document.addEventListener('DOMContentLoaded', function() {
    var getStartedButton = document.getElementById('getStartedButton');

    getStartedButton.addEventListener('click', function() {
        window.open('https://www.your-payment-url.com', 'Payment', 'width=600,height=600');
    });
});

document.addEventListener('DOMContentLoaded', function() {
    var getStartedButton2 = document.getElementById('getStartedButton2');

    getStartedButton2.addEventListener('click', function() {
        window.open('https://www.your-payment-url.com', 'Payment', 'width=600,height=600');
    });
});