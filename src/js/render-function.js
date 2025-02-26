export function renderImages(images) {
    const gallery = document.getElementById("gallery");
    const imageElements = images.map(image => {
        const img = document.createElement("img");
        img.src = image.webformatURL;
        img.alt = image.tags;
        img.classList.add("gallery-image");
        return img;
    });
    imageElements.forEach(img => gallery.appendChild(img));
}