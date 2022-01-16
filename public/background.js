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
      // var require_script = document.createElement('script');
      // require_script.setAttribute("src","assets/js/require.js");
      // document.head.appendChild(require_script);
      let logo = chrome.runtime.getURL("happy.png");
      var elemDiv = document.createElement('img');
      elemDiv.setAttribute("id", "blobby67");
      elemDiv.style.cssText = 'position: fixed;right: 10px;bottom: 10px;z-index: 1000;width:125px;';
      elemDiv.src = logo;
      document.body.appendChild(elemDiv);
      fetch("https://api.us-south.tone-analyzer.watson.cloud.ibm.com/instances/e9db5587-e4e6-479b-b4ee-7af1cdc6454e/v3/tone?version=2017-09-21&text=Team%2C%20I%20know%20that%20times%20are%20tough%21%20Product%20sales%20have%20been%20disappointing%20for%20the%20past%20three%20quarters.%20We%20have%20a%20competitive%20product%2C%20but%20we%20need%20to%20do%20a%20better%20job%20of%20selling%20it%21", {
  headers: {
    Authorization: "Basic YXBpa2V5OmpTY3ZuMVVKWkdKMXJIMVgwRm9VckNzU3Q2QXV4WlNHdEdvTDlSRnZZNzFW"
  }
}).then(response => response.json()).then(response => {
  console.log(response)
})
}