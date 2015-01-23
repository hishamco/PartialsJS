window.onload = function () {
    var elements = document.querySelectorAll('[data-include]');
    for (var i = 0; i <= elements.length; i++) {
        elements[i].innerHTML = httpGet(elements[i].getAttribute('data-include'));
    }
};

function httpGet(url) {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url, false);
    xhr.send();
    if (xhr.readyState == 4 && xhr.status == 200)
        return xhr.responseText;
}