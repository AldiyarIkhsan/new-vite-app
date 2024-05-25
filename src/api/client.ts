import axios from 'axios';

export const client = axios.create({
  baseURL:"https://jsonplaceholder.typicode.com/",
});

export const clientForImage = axios.create({
  baseURL: 'https://picsum.photos/v2/list',
});



