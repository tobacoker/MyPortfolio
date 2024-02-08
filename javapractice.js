function greet() {
alert("Hello");
}
function displayMessage1() {
    alert("Welcome to my Java Flex");
}
function question() {
    var readyForMatrix = confirm("Are you ready to Step into the Matrix?");
    return readyForMatrix;
}


var userResponse = question();

// Check the user's response and redirect accordingly
if (userResponse) {
    console.log("User is ready to Step into the Matrix!");
    // If the user is ready, redirect to the Matrix website
    window.location.href = "https://www.youtube.com/watch?v=dj5pEf_e1zA";
} else {
    console.log("User is not ready to Step into the Matrix.");
    // If the user is not ready, redirect to a different page
    window.location.href = "index.html";
}

if (userResponse) {
    console.log("User is ready to Step into the Matrix!");
    
} else {
    console.log("User is not ready to Step into the Matrix.");
   
}

function runSequence() {
    greet();
    question();
    
}


runSequence();