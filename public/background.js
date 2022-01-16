/* eslint-disable no-undef */
// background.js



chrome.runtime.onMessage.addListener(async function(message, sender, senderResponse){
  if (message.msg === "image") {
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    console.log("I got here!!!! jsabfdkjbnskj")
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      function: addImage,
    });
    // senderResponse({data: tab});
    return true;
  }
});

function addImage() {
      let logo = chrome.runtime.getURL("happy.png");
      var elemDiv = document.createElement('img');
      elemDiv.setAttribute("id", "blobby67");
      elemDiv.style.cssText = 'position: fixed;right: 10px;bottom: 10px;z-index: 1000;width:125px;';
      elemDiv.src = logo;
      document.body.appendChild(elemDiv);
}
