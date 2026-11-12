/**
 * У файлі render-functions.js створи екземпляр SimpleLightbox для роботи з модальним вікном та зберігай функції для відображення елементів інтерфейсу:

createGallery(images). Ця функція повинна приймати масив images, створювати HTML-розмітку для галереї, додавати її в контейнер галереї та викликати метод екземпляра SimpleLightbox refresh(). Нічого не повертає.
clearGallery(). Ця функція нічого не приймає та повинна очищати вміст контейнера галереї. Нічого не повертає.
showLoader(). Ця функція нічого не приймає, повинна додавати клас для відображення лоадера. Нічого не повертає.
hideLoader(). Ця функція нічого не приймає, повинна прибирати клас для відображення лоадера. Нічого не повертає.
 */
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader-container');
const lightbox = new SimpleLightbox('.gallery-link', {
  captions: true,
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
});
export const createGallery = images => {
  const galleryItems = images
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) =>
        `<li class="gallery-item">
  <a class="gallery-link" href="${largeImageURL}">
    <img
      class="gallery-image"
      src="${webformatURL}"
      alt="${tags}"
    />
  </a>
<div class="image-info">
          <div class="info-item">
            <h3>Likes</h3>
            <p>${likes}</p>
          </div>

          <div class="info-item">
            <h3>Views</h3>
            <p>${views}</p>
          </div>

          <div class="info-item">
            <h3>Comments</h3>
            <p>${comments}</p>
          </div>

          <div class="info-item">
            <h3>Downloads</h3>
            <p>${downloads}</p>
          </div>
        </div>
</li>
`
    )
    .join('');

  gallery.innerHTML = galleryItems;

  lightbox.refresh();
};

export const clearGallery = () => {
  gallery.innerHTML = '';
};
export const showLoader = () => {
  loader.classList.add('is-visible');
};
export const hideLoader = () => {
  loader.classList.remove('is-visible');
};
