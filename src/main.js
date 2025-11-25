// src/main.js
import './css/styles.css';
import { getImagesByQuery } from './js/pixabay-api.js';
import { createGallery, clearGallery, showLoader, hideLoader, showNoResultsToast, showErrorToast } from './js/render-functions.js';

const form = document.getElementById('search-form');
const input = document.getElementById('search-input');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const query = input.value.trim();

  if (!query) {
    showErrorToast('Please enter a search query.');
    return;
  }

  clearGallery();
  showLoader();

  getImagesByQuery(query)
    .then(response => {
      const data = response.data;
      const hits = Array.isArray(data.hits) ? data.hits : [];

      if (hits.length === 0) {
        showNoResultsToast();
        return;
      }

      createGallery(hits);
    })
    .catch(error => {
      console.error('API error:', error);
      showErrorToast('Failed to fetch images. Please check your network and try again.');
    })
    .finally(() => {
      hideLoader();
    });
});
