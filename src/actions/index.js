import axios from 'axios';

const API_KEY = '2cfaf563536dff885905cc14cef9f85d';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`

export const FETCH_WEATHER = 'FEATCH_WEATHER';

export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city},us`

    let request = axios.get(url);

    return {
        type: FETCH_WEATHER,
        payload: request
    }
}