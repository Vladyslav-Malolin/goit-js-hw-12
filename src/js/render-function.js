
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const gallery = document.getElementById("gallery");
const lightbox = new SimpleLightbox(".gallery-link");
lightbox.refresh();


export function renderImages(images) {
    const markup = images
        .map(
            ({ webformatURL, largeImageURL, tags, likes, views, comments, downloads }) =>
                `<a href="${largeImageURL}" class="gallery-link gallery-item">
                    <img src="${webformatURL}" alt="${tags}">
                    <p>❤️ ${likes} | 👁 ${views} | 💬 ${comments} | ⬇️ ${downloads}</p>
                </a>`
        )
        .join("");

    gallery.insertAdjacentHTML("beforeend", markup);

    lightbox.refresh();
}

