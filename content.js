// content.js

// Function to retrieve data from local storage
function getDataFromLocalStorage() {
  return localStorage.getItem('routine')
}

// Send a message to the background script with the retrieved data
chrome.runtime.sendMessage({
  action: 'retrieveData',
  data: getDataFromLocalStorage()
})

// content.js

// Listen for messages from background.js
chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
  // Check if the message contains the expected data
  if (message && message.message) {
    // Do something with the data from background.js
    console.log('Received message in content.js:', message.message)

    // Perform actions based on the data, e.g., modify the DOM
    document.body.style.backgroundColor = 'lightblue'
  }
})

console.log('hi')
