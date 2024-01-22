// background.js
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.action === "openPopup") {
      // Open the popup
      chrome.browserAction.openPopup();
    }
  });
  