// background.js



urlsToBlock = [
    // "*://www.google.com/recaptcha/api.js?hl=it",
    // "*://www.gstatic.com/*",
    "*://*.cloudfront.net/*",
    "*://tovanillitechan.com/*",
    "*://thaudray.com/*"
]

function blockRequest(details) {
    console.log(details);
   return {cancel: true};
}

function updateFilters(urls) {
   if(chrome.webRequest.onBeforeRequest.hasListener(blockRequest))
     chrome.webRequest.onBeforeRequest.removeListener(blockRequest);
   chrome.webRequest.onBeforeRequest.addListener(blockRequest, {urls: urlsToBlock}, ['blocking']);
}

updateFilters();