let storage = null

chrome.runtime.sendMessage({
  from: 'popup',
  subject: 'localstorage'
}).then((res) => {
  storage = res
})

console.log(storage)