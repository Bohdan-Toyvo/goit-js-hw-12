'use strict';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { searchImages, PER_PAGE } from './js/pixabay-api.js';
import {
  showLoader,
  clearGallery,
  renderGallery,
  hideLoader,
  scrollPage,
} from './js/render-functions.js';

const form = document.querySelector('.form');
const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader');
const loadMoreBtn = document.querySelector('.load-more');

let query = '';
let page = 1;
let totalHits = 0;

form.addEventListener('submit', onSubmit);
loadMoreBtn.addEventListener('click', loadMoreImages);

async function onSubmit(event) {
  event.preventDefault();

  query = form.elements['search-text'].value.trim();

  if (query === '') {
    iziToast.error({
      title: 'Error',
      message: 'Please enter a search query.',
      position: 'center',
    });
    return;
  }

  page = 1;
  totalHits = 0;
  loadMoreBtn.style.display = 'none';
  showLoader(loader);
  clearGallery(gallery);

  try {
    const data = await searchImages(query);
    totalHits = data.totalHits;

    if (data.hits.length === 0) {
      iziToast.info({
        title: 'Info',
        message:
          'Sorry, there are no images matching your search query. Please try again!',
        position: 'center',
      });
    } else {
      renderGallery(gallery, data.hits);
      if (totalHits > data.hits.length) {
        loadMoreBtn.style.display = 'block';
      }
    }
  } catch (error) {
    console.log(error);
  } finally {
    hideLoader(loader);
  }

  form.reset();
}

async function loadMoreImages() {
  page += 1;
  showLoader(loader);
  loadMoreBtn.style.display = 'none';

  try {
    const data = await searchImages(query, page);
    totalHits = data.totalHits;
    await renderGallery(gallery, data.hits);
    await scrollPage(gallery);

    if (page * PER_PAGE >= totalHits) {
      iziToast.info({
        title: 'End of Results',
        message: "We're sorry, but you've reached the end of search results.",
        position: 'bottomCenter',
      });
      loadMoreBtn.style.display = 'none';
    } else {
      loadMoreBtn.style.display = 'block';
    }
  } catch (error) {
    console.log(error);
  } finally {
    hideLoader(loader);
  }
}
