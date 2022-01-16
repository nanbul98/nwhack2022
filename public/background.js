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
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      function: scraper,
    });
    // senderResponse({data: tab});
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
}


  // SCRAPING
function scraper(){
  require(['request-promise', 'cheerio'], function (rp, $) {
    const url = 'https://en.wikipedia.org/wiki/List_of_Presidents_of_the_United_States';
  
    rp(url)
      .then(function(html){
        //success!
        const wikiUrls = [];
        for (let i = 0; i < 45; i++) {
          wikiUrls.push($('big > a', html)[i].attribs.href);
        }
        console.log(wikiUrls);
      })
      .catch(function(err){
        //handle error
      });
  });
  // const rp = require('request-promise');
  // const $ = require('cheerio');
 
}


// TONE ANALYZER
function toneAnalyze() {
  const dotenv = require('dotenv')
  dotenv.config()
  const ToneAnalyzerV3 = require('ibm-watson/tone-analyzer/v3');
  const { IamAuthenticator } = require('ibm-watson/auth');

  const toneAnalyzer = new ToneAnalyzerV3({
    version: '2017-09-21',
    authenticator: new IamAuthenticator({
      apikey: process.env.api_key,
    }),
    serviceUrl: process.env.api_url,
  });

  const text = 'Team, I know that times are tough! Product '
    + 'sales have been disappointing for the past three '
    + 'quarters. We have a competitive product, but we '
    + 'need to do a better job of selling it!';

  const toneParams = {
    toneInput: { 'text': text },
    contentType: 'application/json',
  };

  toneAnalyzer.tone(toneParams)
    .then(toneAnalysis => {
      console.log(JSON.stringify(toneAnalysis, null, 2));
    })
    .catch(err => {
      console.log('error:', err);
    });
}

