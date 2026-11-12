/***У файлі pixabay-api.js зберігай функції для виконання HTTP-запитів:

getImagesByQuery(query). 
Ця функція повинна приймати один параметр query 
(пошукове слово, яке є рядком), 
здійснювати HTTP-запит і повертати значення властивості data з отриманої відповіді. */
import axios from 'axios';

/**
 * 58590690-6f7ca58f788725446c101d2a7
 *
 * https://pixabay.com/api/
 *
 */
const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '58590690-6f7ca58f788725446c101d2a7';
export const getImagesByQuery = query => {
  return axios
    .get(BASE_URL, {
      params: {
        key: API_KEY,
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
      },
    })
    .then(response => {
      return response.data;
    });
};
