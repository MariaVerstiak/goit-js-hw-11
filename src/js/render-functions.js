// src/js/render-functions.js
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import 'loaders.css/loaders.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const galleryEl = document.getElementById('gallery');
const loaderEl = document.getElementById('loader');

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 200,
});

export function createGallery(images) {
  const markup = images.map(img => {
    const { webformatURL, largeImageURL, tags, likes, views, comments, downloads } = img;
    return `
      <li class="photo-card">
        <a href="${largeImageURL}" data-lightbox="gallery" data-title="${tags}">
          <img src="${webformatURL}" alt="${tags}" loading="lazy" />
        </a>
        <div class="info">
          <div class="info-item"><span>Likes</span><b>${likes}</b></div>
          <div class="info-item"><span>Views</span><b>${views}</b></div>
          <div class="info-item"><span>Comments</span><b>${comments}</b></div>
          <div class="info-item"><span>Downloads</span><b>${downloads}</b></div>
        </div>
      </li>
    `;
  }).join('');

  galleryEl.innerHTML = markup;
  lightbox.refresh();
}

export function clearGallery() {
  galleryEl.innerHTML = '';
  lightbox.refresh();
}

export function showLoader() {
  loaderEl.setAttribute('aria-hidden', 'false');
  loaderEl.style.display = 'flex';
}

export function hideLoader() {
  loaderEl.setAttribute('aria-hidden', 'true');
  loaderEl.style.display = 'none';
}

export function showNoResultsToast() {
  iziToast.warning({
    title: 'No results',
    message: 'Sorry, there are no images matching your search query. Please try again!',
    position: 'topRight',
    timeout: 4000
  });
}

export function showErrorToast(message = 'Something went wrong. Please try again later.') {
  iziToast.error({
    title: 'Error',
    message,
    position: 'topRight',
    timeout: 5000
  });
}
