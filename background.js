// background.js

let data = null
// Handle messages from content scripts
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.action === 'retrieveData') {
    // Do something with the retrieved data
    data = request.data
  }
})
