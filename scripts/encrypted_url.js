"use strict";

function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (m, key, value) {
        vars[key] = value;
    });
    return vars;
}

if (!getUrlVars().url) {
    window.location = "create_url.html";
}

function invaild(element) {
    element.style.backgroundColor = "red";
    setTimeout(function () {
        element.style.backgroundColor = "white";
    }, 500);
}

function keyPress(event) {
    if (event.keyCode == 13) {
        let passwordInput = document.getElementById("key");
        try {
            let decryptedUrl = CryptoJS.AES.decrypt(getUrlVars().url, passwordInput.value).toString(CryptoJS.enc.Utf8);
            if (CryptoJS.SHA256(decryptedUrl + getUrlVars().url) == getUrlVars().hash) {
                window.location.href = decryptedUrl;
            } else {
                invaild(passwordInput);
            }
        } catch (err) {
            console.log(err);
            invaild(passwordInput);
        }
    }
}
