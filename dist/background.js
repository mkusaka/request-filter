chrome.webRequest.onBeforeRequest.addListener((request) => {
    console.log(request.url);
    return {
        cancel: true
    };
}, { urls: ["<all_urls>"] }, ["blocking"]);
//# sourceMappingURL=background.js.map