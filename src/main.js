import {galleryItems} from "./js/galleryItems";
import Handlebars from 'handlebars';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';


// знаходимо посилання на список
const galleryListEl = document.querySelector('.js-gallery');


// Варіанти використання шаблонів
// 1 варіант - додаємо теплейт в розмітку
// const galleryTempl = document.querySelector('.gallery-teml');

// const template = Handlebars.compile(galleryTempl.innerHTML);

// const createGalleryItems = (arr) => {
//     return arr.map(item => {
//         return template(item);
//     }).join(" ")
// }



// 2 variant - шаблон окремо в файлі імпортується
import galleryTempl from './js/galleryTeml.hbs?raw';

const template = Handlebars.compile(galleryTempl);

const createGalleryItems = arr => {
  return template(arr);
};



// створюємо список та додаємо в розмітку
const markup = createGalleryItems(galleryItems);

galleryListEl.innerHTML = markup;





new SimpleLightbox('.gallery a', {
  captionDelay: 250,
  captionsData: 'alt',
});
