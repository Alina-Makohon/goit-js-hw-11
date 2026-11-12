import iziToast from 'izitoast';

import 'izitoast/dist/css/iziToast.min.css';
// import './js/pixabay-api';
import { getImagesByQuery } from './js/pixabay-api';
import {
  clearGallery,
  createGallery,
  showLoader,
  hideLoader,
} from './js/render-functions';

const form = document.querySelector('.form');
const inputText = document.querySelector('input');

form.addEventListener('submit', event => {
  event.preventDefault();
  const clearInput = inputText.value.trim();
  clearGallery();
  if (clearInput.length === 0) {
    return;
  }
  showLoader();
  getImagesByQuery(clearInput)
    .then(data => {
      if (data.hits.length === 0) {
        iziToast.error({
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          position: 'topRight',
        });

        return;
      }

      createGallery(data.hits);
    })
    .catch(error => {
      iziToast.error({
        message: 'Something went wrong. Please try again!',
        position: 'topRight',
      });
    })
    .finally(() => {
      hideLoader();
    });
});
