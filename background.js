let state = false;

chrome.browserAction.onClicked.addListener(function(tab) {
	if (state === false) {
		chrome.tabs.insertCSS(null, { file: 'dark_mode.css' });
		state = true;
	} else {
		chrome.tabs.insertCSS(null, { file: 'normal_mode.css' });
		state = false;
	}
});
