// src/js/pixabay-api.js
import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const KEY = '53389210-1518ce0ab28dfc8ed2510f80a';

if (!KEY) {
  console.warn('VITE_PIXABAY_KEY не знайдено. Додайте ключ у файл .env');
}

export function getImagesByQuery(query, params = {}) {
  const searchParams = {
    key: KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    per_page: 40,
    ...params,
  };

  return axios.get(BASE_URL, { params: searchParams });
}
