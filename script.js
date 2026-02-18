// Array to store image data for each section
let sections = {
    section1: [],
    section2: [],
    section3: []
};

// Function to add an image to a specific section
function addImageToSection(sectionId) {
    const imageUrl = prompt("Enter the image URL:");
    
    if (imageUrl) {
        // Validate if the entered URL is actually an image
        if (isValidImageUrl(imageUrl)) {
            // Add image to the section array
            sections[sectionId].push(imageUrl);
            
            // Update the UI to display the new image
            updateImageContainer(sectionId);
        } else {
            alert("Please enter a valid image URL (with .jpg, .jpeg, .png, .gif, or .webp extension)");
        }
    }
}

// Function to validate if a URL is an image
function isValidImageUrl(url) {
    return /\.(jpg|jpeg|png|gif|webp)$/i.test(url);
}

// Function to update the image container UI
function updateImageContainer(sectionId) {
    const container = document.getElementById(sectionId);
    
    // Clear the container
    container.innerHTML = '';
    
    // Add all images in the section array to the container
    sections[sectionId].forEach((imageUrl, index) => {
        const imageItem = document.createElement('div');
        imageItem.className = 'image-item';
        
        const img = document.createElement('img');
        img.src = imageUrl;
        img.alt = `Image ${index + 1} in ${sectionId}`;
        
        const removeBtn = document.createElement('button');
        removeBtn.className = 'remove-btn';
        removeBtn.innerHTML = '&times;';
        removeBtn.onclick = () => removeImage(sectionId, index);
        
        imageItem.appendChild(img);
        imageItem.appendChild(removeBtn);
        container.appendChild(imageItem);
    });
}

// Function to remove an image from a section
function removeImage(sectionId, imageIndex) {
    // Remove the image from the array
    sections[sectionId].splice(imageIndex, 1);
    
    // Update the UI
    updateImageContainer(sectionId);
}

// Initialize the page by updating all containers
document.addEventListener('DOMContentLoaded', function() {
    updateImageContainer('section1');
    updateImageContainer('section2');
    updateImageContainer('section3');
});