const API_KEY = "48886495-377d6660b652cff1cfff8c7f1";
const BASE_URL = 'https://pixabay.com/api/';

export async function fetchImages(query, page = 1, perPage = 40) {
    const response = await fetch(`${BASE_URL}?key=${API_KEY}&q=${encodeURIComponent(query)}&page=${page}&per_page=${perPage}&image_type=photo&orientation=horizontal`);

    if (!response.ok) {
        throw new Error('Failed to fetch images');
    }

    const data = await response.json();
    return data.hits;
}