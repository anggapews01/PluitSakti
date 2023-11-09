'use strict';

const api_key = 'b45dc6b865e59e87bcc8b99973620884';
const imageBaseURL = 'http://image.tmdb.org/t/p/';


const fetchDataFromServer = function (url, callback, optionalParam) {
  fetch(url)
    .then(response => response.json())
    .then(data => callback(data, optionalParam));
}

export { imageBaseURL, api_key, fetchDataFromServer };