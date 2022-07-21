import axios from 'axios';
import { HTTP, HTTPS } from '@constans/api'

/** 
 * Изменяет URL  с HTTP на HTTPS 
 * @param {String} url - url для изменения
 * @returns {String} - url c HTTPS
*/
export const changeHTTP = url => {
  const result = url ? url.replace(HTTP, HTTPS) : url

  return result;
}

/** 
 * Отправляет запрос fetch
 * @param {String} url - url для запроса
 * @returns {String} - Promise с результатом запроса
*/
export const getApiResourse = async (url) => {
  try {
    const res = await axios(url);
    return res.data;
  } catch (error) {
    console.error('Could not fetch.', error.message);
    return false;
  }
}
