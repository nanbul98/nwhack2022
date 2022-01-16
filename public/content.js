var depthBottomMeters = 8; //Depth in meters
var depthBottomPixel;
var depthStart;

var init = function(){

	depthBottomPixel = meterToPixel(depthBottomMeters);
	depthStart = depthBottomPixel - meterToPixel(depthBottomMeters * 0.8);

	$(window).scroll(function(e){

		var s = $("body, html").scrollTop();
		var docHeight = document.body.scrollHeight;

		var progress = (s - depthStart) / (depthBottomPixel - depthStart);
		if(progress > 0){
			// Prevent further scrolling
			// $("body, html").scrollTop(depthBottomPixel);
			elemDiv = document.getElementById("blobby67")
			elemDiv.src = chrome.runtime.getURL("snorkler.png")
			console.log("in too deep")
		} 
	});

};

function meterToPixel(m){
	// Using 96DPI
	var p = ((m * 100) / 2.54) * 96;
	return p;
}


window.addEventListener("load", async () => {init()});


window.addEventListener("load", async () => {
    chrome.runtime.sendMessage({msg: 'image'});
});
