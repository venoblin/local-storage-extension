chrome.runtime.onMessage.addListener((msg, sender, response) => {
  if (msg.storage) {
    console.log(msg.storage)
  }
})
