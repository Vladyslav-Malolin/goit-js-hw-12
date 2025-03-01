import { fetchImages } from "/js/pixabay-api.js";
import { renderImages } from "/js/render-function.js";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const form = document.getElementById("search-form");
const input = document.getElementById("search-input");
const loader = document.getElementById("loader");
const gallery = document.getElementById("gallery");
const loadMoreBtn = document.getElementById("load-more");

let query = "";
let page = 1;
const perPage = 40;

form.addEventListener("submit", async (event) => {
    event.preventDefault();
    query = input.value.trim();
    page = 1;
    gallery.innerHTML = "";
    loadMoreBtn.classList.add("hidden");

    if (!query) {
        iziToast.error({ title: "Error", message: "Please enter a search term!" });
        return;
    }

    await loadImages();
});

loadMoreBtn.addEventListener("click", async () => {
    page += 1;
    await loadImages();
    smoothScroll();
});

async function loadImages() {
    loader.classList.remove("hidden");

    try {
        const images = await fetchImages(query, page, perPage);
        if (images.length === 0 && page === 1) {
            iziToast.warning({ title: "No Results", message: "Try another keyword!" });
        } else {
            renderImages(images);
            if (images.length < perPage) {
                loadMoreBtn.classList.add("hidden");
                iziToast.info({ title: "End", message: "You've reached the end of search results." });
            } else {
                loadMoreBtn.classList.remove("hidden");
            }
        }
    } catch (error) {
        iziToast.error({ title: "Error", message: "Failed to load images!" });
    } finally {
        loader.classList.add("hidden");
    }
}

function smoothScroll() {
    const images = document.querySelectorAll(".gallery-item");
    if (images.length < perPage) return;
    const lastLoadedRow = [...images].slice(-perPage);
    if (lastLoadedRow.length > 0) {
        lastLoadedRow[0].scrollIntoView({
            behavior: "smooth",
            block: "start",
        });
    }
}



