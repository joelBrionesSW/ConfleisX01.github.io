let content = [];

function login() {
    fetch('./Html/Home/login.html').then(
        function (response) {
            return response.text();
        }
    ).then(
        function (textData) {
            content = textData
            aplyContent();
        }
    )
}

function contact() {
    fetch('./Html/Home/contact.html').then(
        function (response) {
            return response.text();
        }
    ).then(
        function (textData) {
            content = textData
            aplyContent();
        }
    )
}

function aplyContent() {
    document.getElementById('container').innerHTML = content;
}