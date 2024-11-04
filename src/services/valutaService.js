import axios from 'axios';

export const fetchForecastData = async () => {
    const response = await axios.get('/forecast_us');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = response.data;
    
    return data.forecast.map(item => ({
      date: item.Date,
      forecastedRate: item['Forecasted PHP/IDR'],
    }));
  };
  