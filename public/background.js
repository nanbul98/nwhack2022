/* eslint-disable no-undef */
// background.js


// import rp from 'request-promise';
// import $ from 'cheerio';

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ logo });
  console.log('Default logo set to', `logo: ${logo}`);
});

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
  var paragraphs = document.getElementsByClassName("css-axufdj")[0].textContent;
  // var anger = 0;
  // var fear = 0;
  // var joy = 0;
  // var sadness = 0;
  // var analytical = 0;
  // var confident = 0;
  // var tentative = 0;
  // var emotions = ['anger', 'fear', 'joy', 'sadness', 'analytical', 'confident', 'tentative']
  // var emotionCount = [0, 0, 0, 0, 0, 0, 0]  
  // var maxEmotionCount = 0;
  // var modeEmotion;
  // var text = "";
  // for(var i = 0; i < paragraphs.length; i++) {
    var enc_text = encodeURIComponent(paragraphs);
    // console.log(enc_text)
    // fetch(`https://api.us-south.tone-analyzer.watson.cloud.ibm.com/instances/e9db5587-e4e6-479b-b4ee-7af1cdc6454e/v3/tone?version=2017-09-21&text=${enc_text}`, {
    //   headers: {
    //     Authorization: "Basic YXBpa2V5OmpTY3ZuMVVKWkdKMXJIMVgwRm9VckNzU3Q2QXV4WlNHdEdvTDlSRnZZNzFW"
    //   }
    // })
    fetch(`https://api.us-south.tone-analyzer.watson.cloud.ibm.com/instances/9a31545b-cdc0-4cbb-8eb7-4bd1469db1c3/v3/tone?version=2017-09-21&text=${enc_text}`, {
      headers: {
        Authorization: "Basic YXBpa2V5OmdSM3ZLdE9zX1RuanFNd0p0Mk5VcEdBS0o2dm5FcE9GYzd2Q0gwOEhvTEox"
      }
    }).then(response => response.json()).then(response => {
      console.log(response)
    //   response.document_tone.tones.forEach((x) => {
    //     console.log(x, "tone")
    //     emotionCount[emotions.indexOf(x.tone_id)] += x.score
    // })
    })
  // }
  // maxEmotionCount = Math.max(...emotionCount)
  // modeEmotion = emotions[emotionCount.indexOf(maxEmotionCount)]
  // console.log(emotionCount)
  // console.log(modeEmotion)
}
