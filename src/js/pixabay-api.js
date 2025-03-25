'use strict';

import axios from 'axios';

const API_KEY = '49479745-ecb2a9650ccad432b929afb0a';
const BASE_URL = 'https://pixabay.com/api/';
export const PER_PAGE = 15;

export async function searchImages(query, page) {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        key: API_KEY,
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
        per_page: PER_PAGE,
        page: page,
      },
    });
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
}
