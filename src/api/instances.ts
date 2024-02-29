import axios from 'axios';

export const API_KEY = process.env.REACT_APP_API_KEY;
export const GEOCODE_ACCESS_TOKEN = process.env.REACT_APP_GEOCODE_ACCESS_TOKEN;

export const baseInstance = axios.create({
	baseURL: `https://api.weatherapi.com/v1`,
	params: { key: API_KEY },
});

export const geocodeInstanse = axios.create({
	baseURL: `https://eu1.locationiq.com/v1`,
	params: { key: GEOCODE_ACCESS_TOKEN, format: 'json' },
});

export const weatherWallpaperInstance = axios.create({
	baseURL: `https://source.unsplash.com/random`,
});
