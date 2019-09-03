// https://developer.chrome.com/extensions/webRequest
// read filter urls from
// filter by black or white list
// support pattern match
chrome.webRequest.onBeforeRequest.addListener(
  (request) => {
    console.log(request.url)
    return {
      cancel: true
    }
  },
  { urls: ["<all_urls>"] },
  ["blocking"]
)
