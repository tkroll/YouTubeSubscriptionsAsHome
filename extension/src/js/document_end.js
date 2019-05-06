var subsUrl = 'https://www.youtube.com/feed/subscriptions'

chrome.extension.sendMessage({}, response => {
  var readyStateCheckInterval = setInterval(() => {
    // look for complete event
    if(document.readyState === 'complete') {
      // clear the interval
      clearInterval(readyStateCheckInterval)
      try {
        // find the logo link
        var logo = document.querySelector('a#logo')
        if(!!logo) {
          // clone the logo link to remove the event listeners
          var logoClone = logo.cloneNode(true)
          logo.parentNode.replaceChild(logoClone, logo)
          // change link to subscriptions page
          logoClone.href = subsUrl
        }
      }
      catch(e) {}
    }
  }, 10)
})