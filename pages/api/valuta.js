import axios from 'axios';
import fs from 'fs';
import path from 'path';

export default async function handler(req, res) {
  try {
    const responseUs = await axios.get('https://dlyforecast-62d3448d0853.herokuapp.com/forecast_us');
    const responseJp = await axios.get('https://dlyforecast-62d3448d0853.herokuapp.com/forecast_jp');
    const responsePh = await axios.get('https://dlyforecast-62d3448d0853.herokuapp.com/forecast_ph');

    const currenciesDataPath = path.join(process.cwd(), 'public/temp/data/valuta.json');
    const currenciesResponse = JSON.parse(fs.readFileSync(currenciesDataPath, 'utf-8'));

    currenciesResponse.currencies.forEach(currency => {
      if (currency.key === "US") {
        currency.graphData = responseUs.data.forecast.map(forecastData => ({
          month: getMonthFromDate(forecastData.Date),
          value: forecastData['Forecasted PHP/IDR'],
        }));
      } else if (currency.key === "JP") {
        currency.graphData = responseJp.data.forecast.map(forecastData => ({
          month: getMonthFromDate(forecastData.Date),
          value: forecastData['Forecasted JPY/IDR'],
        }));
      } else if (currency.key === "PH") {
        currency.graphData = responsePh.data.forecast.map(forecastData => ({
          month: getMonthFromDate(forecastData.Date),
          value: forecastData['Forecasted PHP/IDR'],
        }));
      }
    });

    res.status(200).json(currenciesResponse);

  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ error: 'Failed to fetch data' });
  }
}

function getMonthFromDate(dateString) {
  const date = new Date(dateString);
  return date.toLocaleString('default', { month: 'long' });
}
