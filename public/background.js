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
  var paragraphs = document.getElementsByClassName("css-axufdj")[0].textContent;
    var enc_text = encodeURIComponent(paragraphs);
    fetch(`https://api.us-south.tone-analyzer.watson.cloud.ibm.com/instances/9a31545b-cdc0-4cbb-8eb7-4bd1469db1c3/v3/tone?version=2017-09-21&text=${enc_text}`, {
      headers: {
        Authorization: "Basic YXBpa2V5OmdSM3ZLdE9zX1RuanFNd0p0Mk5VcEdBS0o2dm5FcE9GYzd2Q0gwOEhvTEox"
      }
    }).then(response => response.json()).then(response => {
      console.log(response)
    })
}
