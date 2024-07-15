chrome.runtime.onMessage.addListener((msg, sender, response) => {
  if ((msg.from === 'popup') && (msg.subject === 'olcalstorage')) {

    response(localStorage)
  }
})
