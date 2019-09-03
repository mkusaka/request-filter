chrome.webRequest.onBeforeRequest.addListener((request) => {
    console.log(request.url);
    return {
        cancel: true
    };
}, {
    urls: [
        "*://developer.chrome.com/*",
        "*://*.getpocket.com/"
    ]
}, ["blocking"]);
//# sourceMappingURL=background.js.map