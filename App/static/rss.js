// rss.js
document.addEventListener('DOMContentLoaded', function() {
    // Handle default display mode selection
    const toggleModeSelect = document.getElementById('toggleMode');
    toggleModeSelect.addEventListener('change', function() {
        const selectedMode = toggleModeSelect.value;
        if (selectedMode === 'short') {
            // Set display mode to short description
            setDisplayMode('short');
        } else if (selectedMode === 'full') {
            // Set display mode to full content
            setDisplayMode('full');
        } else if (selectedMode === 'summary') {
            selectedMode('summary')
        }
    });
});

function setDisplayMode(mode) {
    // Get all feed entries
    const feedEntries = document.querySelectorAll('.feed-entry');
    feedEntries.forEach(function(entry) {
        // Hide or show short description and full content based on the selected mode
        const shortDescription = entry.querySelector('.short-description');
        const fullContent = entry.querySelector('.full-content');
        const summarizedContent = entry.querySelector('.summarized-content')
        if (mode === 'short') {
            shortDescription.style.display = 'block';
            fullContent.style.display = 'none';
            summarizedContent.style.display = 'none';
        } else if (mode === 'full') {
            shortDescription.style.display = 'none';
            fullContent.style.display = 'block';
            summarizedContent.style.display = 'none';
        } else if (mode === 'summary') {
            shortDescription.style.display = 'none';
            fullContent.style.display = 'none';
            summarizedContent.style.display = 'block';
        }
    });
}

var popup = document.getElementById("popup");
var button = document.getElementById("add_articles");
var articles = document.querySelectorAll(".list-group-item")

// When the button is clicked, show the popup
button.onclick = function() {
  popup.style.display = "block";
}

// Function to close the popup when the close button is clicked
function closePopup() {
  popup.style.display = "none";
}

let scrollInterval;

document.getElementById('scrollUp').addEventListener('mousedown', function() {
    scrollInterval = setInterval(function() {
        document.querySelector('.list-group-item').scrollTop -= 50; // Scroll up by 50px
    }, 100); // Adjust the interval as needed
});

document.getElementById('scrollDown').addEventListener('mousedown', function() {
    scrollInterval = setInterval(function() {
        document.querySelector('.list-group-item').scrollTop += 50; // Scroll down by 50px
    }, 100); // Adjust the interval as needed
});

// Clear the interval on mouseup or mouseout to stop scrolling
document.getElementById('scrollUp').addEventListener('mouseup', clearScrollInterval);
document.getElementById('scrollUp').addEventListener('mouseout', clearScrollInterval);
document.getElementById('scrollDown').addEventListener('mouseup', clearScrollInterval);
document.getElementById('scrollDown').addEventListener('mouseout', clearScrollInterval);

function clearScrollInterval() {
    clearInterval(scrollInterval);
}

