const photoInput = document.getElementById("photoInput");
const profilePhoto = document.getElementById("profilePhoto");
const photoPlaceholder = document.getElementById("photoPlaceholder");
const removePhotoButton = document.getElementById("removePhoto");

const STORAGE_KEY = "myWebsitePhoto";

// Website खुलने पर saved photo दिखाएं
const savedPhoto = localStorage.getItem(STORAGE_KEY);

if (savedPhoto) {
    profilePhoto.src = savedPhoto;
    profilePhoto.style.display = "block";
    photoPlaceholder.style.display = "none";
    removePhotoButton.style.display = "inline-block";
}


// Photo select करने पर
photoInput.addEventListener("change", function () {

    const file = photoInput.files[0];

    if (!file) {
        return;
    }

    // Check करें कि file image है
    if (!file.type.startsWith("image/")) {
        alert("Please select an image.");
        return;
    }

    const reader = new FileReader();

    reader.onload = function () {

        // Photo save करें
        localStorage.setItem(STORAGE_KEY, reader.result);

        // Photo दिखाएं
        profilePhoto.src = reader.result;
        profilePhoto.style.display = "block";

        // 👤 हटाएं
        photoPlaceholder.style.display = "none";

        // Remove button दिखाएं
        removePhotoButton.style.display = "inline-block";
    };

    reader.readAsDataURL(file);
});


// Photo हटाएं
function removePhoto() {

    localStorage.removeItem(STORAGE_KEY);

    profilePhoto.src = "";
    profilePhoto.style.display = "none";

    photoPlaceholder.style.display = "block";

    photoInput.value = "";

    removePhotoButton.style.display = "none";
}