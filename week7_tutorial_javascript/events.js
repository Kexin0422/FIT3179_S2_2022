// Function declarations
function incrementCounter() {
	var spanElement = document.getElementById('counter');
	var count = spanElement.getAttribute('numberOfClicks');
    count++;    
    // Element.innerText is the textual content displayed by a span 
    // element. Assigning a new value to the innerText attribute 
    // modifies the text, in this example, the new text is the count value.
    spanElement.innerText = count;
    spanElement.setAttribute('numberOfClicks', count);
}

function toggleVisibility() {
    var chartImage = document.getElementById('chart1');
    if (chartImage.style.display === "none") {
        chartImage.style.display = "block";
    } else {
        chartImage.style.display = "none";
    }
}

// Script calls
document.getElementById('incrementButton').addEventListener('click', incrementCounter);
document.getElementById('chartToggle').addEventListener('click', toggleVisibility);