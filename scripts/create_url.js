"use strict";

function submit() {
    let url = document.getElementById("url");
    let key = document.getElementById("key");
    if (url.value == "") {
        invaild(url);
        return;
    }
    if (key.value == "") {
        invaild(key);
        return;
    }
    let encrypted = CryptoJS.AES.encrypt(url.value, key.value);
    let newUrl = `https://${window.location.hostname}/URL-Locker/index.html?url=${encrypted}&hash=${CryptoJS.SHA256(url.value + encrypted)}`;
    document.getElementById("urlField").innerHTML += `<br></br><a href=\"${newUrl}\">${newUrl}</a>`;
}

function invaild(element) {
    element.style.backgroundColor = "red";
    setTimeout(function () {
        element.style.backgroundColor = "white";
    }, 500);
}

function keyPress(event) {
    if (event.keyCode == 13) {
        submit();
    }
}
