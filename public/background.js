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
  if (document.getElementById("blobby67") == null){
    let logo = chrome.runtime.getURL("happy2.png");
    var elemDiv = document.createElement('img');
    elemDiv.setAttribute("id", "blobby67");
    elemDiv.style.cssText = 'position: fixed;right: 10px;bottom: 10px;z-index: 1000;width:75px;';
    elemDiv.src = logo;
    elemDiv.onclick = function(){
      elemDiv.src = chrome.runtime.getURL("angrypopup.png");
      elemDiv.style.cssText = 'position: fixed;right: 10px;bottom: 10px;z-index: 1000;width:250px;';
    };
    document.body.appendChild(elemDiv);
  }

  var paragraphs = document.getElementsByClassName("css-axufdj")[0].textContent;
  // var ap = document.getElementsByClassName("Component-root-0-2-55")[0].textContent;
  var emotion = "";
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
    // var enc_ap = encodeURIComponent(ap);
    // console.log(enc_ap)
    // console.log(enc_text)
    // fetch(`https://api.us-south.tone-analyzer.watson.cloud.ibm.com/instances/e9db5587-e4e6-479b-b4ee-7af1cdc6454e/v3/tone?version=2017-09-21&text=${enc_text}`, {
    //   headers: {
    //     Authorization: "Basic YXBpa2V5OmpTY3ZuMVVKWkdKMXJIMVgwRm9VckNzU3Q2QXV4WlNHdEdvTDlSRnZZNzFW"
    //   }
    // })
    // fetch(`https://api.us-south.tone-analyzer.watson.cloud.ibm.com/instances/9a31545b-cdc0-4cbb-8eb7-4bd1469db1c3/v3/tone?version=2017-09-21&text=${enc_text}`, {
    //   headers: {
    //     Authorization: "Basic YXBpa2V5OmdSM3ZLdE9zX1RuanFNd0p0Mk5VcEdBS0o2dm5FcE9GYzd2Q0gwOEhvTEox"
    //   }
    // }).then(response => response.json()).then(response => {
    //   emotion = response.document_tone.tones[0].tone_name;
    //   console.log(emotion)
    // //   response.document_tone.tones.forEach((x) => {
    // //     console.log(x, "tone")
    // //     emotionCount[emotions.indexOf(x.tone_id)] += x.score
    // // })
    // })

    fetch(`https://api.us-south.tone-analyzer.watson.cloud.ibm.com/instances/d1ccf867-64e5-4e41-8387-befd0da6dfb6/v3/tone?version=2017-09-21&text=${enc_text}`, {
      headers: {
        Authorization: "Basic YXBpa2V5OmJtS3QwLW5iUW1zR3RQdFVZY3gtRWh2a09nQmV5NDRrN3RxaTBweFVVV2xT"
      }
    }).then(response => response.json()).then(response => {
      emotion = response.document_tone.tones[0].tone_name;
      // var atag = document.createElement('a');
      // atag.href = "https://www.humanetech.com/take-control";
      // atag.setAttribute("id", "blobbytag");
      var blob = document.getElementById("blobby67")
      // atag.appendChild(blob)
      // curr_blob.style.display='none';

      if (emotion == "Fear") {
        blob.src = chrome.runtime.getURL("scared.png");
        blob.onclick = function(){
          blob.src = chrome.runtime.getURL("fearpopup.png");
          blob.style.cssText = 'position: fixed;right: 10px;bottom: 10px;z-index: 1000;width:250px;';
          blob.onclick = "opener.location='https://www.humanetech.com/take-control'"
        };
      } else if (emotion == "Anger") {
        blob.src = chrome.runtime.getURL("angry.png");
        blob.onclick = function(){
          blob.src = chrome.runtime.getURL("angrypopup.png");
          blob.style.cssText = 'position: fixed;right: 10px;bottom: 10px;z-index: 1000;width:250px;';
          blob.onclick = "opener.location='https://www.humanetech.com/take-control'"
        };
      } else if (emotion == "Sadness") {
        blob.src = chrome.runtime.getURL("scared.png");
        blob.onclick = function(){
          blob.src = chrome.runtime.getURL("fearpopup.png");
          blob.style.cssText = 'position: fixed;right: 10px;bottom: 10px;z-index: 1000;width:250px;';
          blob.onclick = "opener.location='https://www.humanetech.com/take-control'"
        };
      } else {
        blob.src = chrome.runtime.getURL("happy2.png");
      }
      console.log(emotion)
    //   response.document_tone.tones.forEach((x) => {
    //     console.log(x, "tone")
    //     emotionCount[emotions.indexOf(x.tone_id)] += x.score
    // })
    })

}
