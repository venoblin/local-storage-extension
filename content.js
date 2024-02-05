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
