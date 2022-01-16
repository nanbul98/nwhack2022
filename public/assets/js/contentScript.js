/* eslint-disable no-undef */

window.addEventListener("load", async () => {
    chrome.runtime.sendMessage({msg: 'image'});
});


