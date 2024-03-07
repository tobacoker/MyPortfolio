window.addEventListener('scroll', function() {
    var scrollPosition = window.scrollY;
    var maxScroll = document.body.scrollHeight - window.innerHeight;
    var percentageScrolled = scrollPosition / maxScroll;
    var hue = 240 * percentageScrolled; // Adjust this value to change the color range

    // Convert HSL color to RGB
    var backgroundColor = 'hsl(' + hue + ', 100%, 50%)';

    // Update the background color of the body
    document.body.style.backgroundColor = backgroundColor;

    // Calculate the luminance of the background color
    var luminance = calculateLuminance(backgroundColor);

    // Set the text color based on the luminance
    document.body.style.color = luminance > 0.5 ? '#000' : '#fff'; // Use black text for light backgrounds, white text for dark backgrounds
});

// Function to calculate the luminance of a color
function calculateLuminance(color) {
    // Extract RGB components
    var rgb = color.match(/\d+/g);
    var r = rgb[0] / 255;
    var g = rgb[1] / 255;
    var b = rgb[2] / 255;

    // Calculate luminance using the relative luminance formula
    var luminance = 0.2126 * r + 0.7152 * g + 0.0722 * b;

    return luminance;
}