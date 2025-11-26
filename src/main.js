// src/main.js
import './css/styles.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import { getImagesByQuery } from './js/pixabay-api.js';
import { createGallery, clearGallery, showLoader, hideLoader, showNoResultsToast, showErrorToast} from './js/render-functions.js';

const form = document.getElementById('search-form');
const input = document.getElementById('search-input');

let lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

form.addEventListener('submit', async e => {
  e.preventDefault();
  const query = input.value.trim();

  if (!query) {
    showErrorToast('Please enter a search query.');
    return;
  }

  clearGallery();
  showLoader();

  try {
    const hits = await getImagesByQuery(query);

    if (!hits.length) {
      showNoResultsToast();
      return;
    }

    createGallery(hits);
    lightbox.refresh();

  } 
  
  catch (error) {
    console.error(error);
    showErrorToast('Failed to fetch images. Please try again.');
  } 
  
  finally {
    hideLoader();
  }
});
