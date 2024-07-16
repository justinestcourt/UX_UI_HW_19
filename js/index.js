// Function to change image source to GIF
function changeToGif() {
    var image = document.getElementById('image');
    image.src = 'images/DownloadGIF.gif'; // Replace 'image.gif' with your actual GIF file path
}

// Function to change image source back to original
function changeToOriginal() {
    var image = document.getElementById('image');
    image.src = 'images/DownloadText.png'; // Replace 'image.jpg' with your original image file path
}