import axios from 'axios';

export default async function handler(req, res) {
    console.log('Request method:', req.method);
    console.log('Request body:', req.body);

    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    const { country } = req.body;

    if (!country) {
        return res.status(400).json({ error: 'Country is required' });
    }

    let firstEndpoint = '';
    let secondEndpoint = '';
    let thirdEndpoint = '';

    const base_url = "https://dlyforecast-62d3448d0853.herokuapp.com"

    if (country === 'JP') {
        firstEndpoint = '/politik_jp';
        secondEndpoint = '/ekonomi_jp';
        thirdEndpoint = '/general_jp';
    } else if (country === 'PH') {
        firstEndpoint = '/politik_ph';
        secondEndpoint = '/ekonomi_ph';
        thirdEndpoint = '/general_ph';
    } else {
        return res.status(400).json({ error: 'Unsupported country' });
    }

    try {
        const [politikResponse, ekonomiResponse, generalResponse] = await Promise.all([
            axios.get(base_url + firstEndpoint),
            axios.get(base_url + secondEndpoint),
            axios.get(base_url + thirdEndpoint)
        ]);

        if (politikResponse.status !== 200 || ekonomiResponse.status !== 200 || generalResponse.status !== 200) {
            throw new Error('One or more network responses were not ok');
        }

        const combinedData = {
            politik: politikResponse.data,
            ekonomi: ekonomiResponse.data,
            general: generalResponse.data
        };

        const result = {
            politik: { data: politikResponse.data.choices[0] },
            ekonomi: { data: ekonomiResponse.data.choices[0] },
            general: { data: generalResponse.data.choices[0] }
        };
        
        res.status(200).json(result);

    } catch (error) {
        console.error('Error fetching forecast data:', error);
        res.status(500).json({ error: 'Failed to fetch data', details: error.message });
    }
}
