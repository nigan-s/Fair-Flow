// content.js
document.addEventListener("DOMContentLoaded", function () {
    // Your button selector, modify accordingly
    var buttonSelector = "button#your-button-id";
  
    // Add a click event listener to the button
    document.querySelector(buttonSelector).addEventListener("click", function () {
      // Send a message to the background script to open the popup
      chrome.runtime.sendMessage({ action: "openPopup" });
    });
  });
  