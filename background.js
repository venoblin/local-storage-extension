// background.js

// Handle messages from content scripts
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.action === 'retrieveData') {
    // Do something with the retrieved data
    console.log('Retrieved data from content script:', request.data)
  }
})
