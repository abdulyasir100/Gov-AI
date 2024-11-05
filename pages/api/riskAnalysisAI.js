import axios from 'axios';

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    const { country } = req.body;

    if (!country) {
        return res.status(400).json({ error: 'Country is required' });
    }

    let politikEndpoint = '';
    let ekonomiEndpoint = '';
    let generalEndpoint = '';

    if (country === 'JP') {
        politikEndpoint = process.env.NEXT_GOVAI_API_RISKAI_POLITIK_JP;
        ekonomiEndpoint = process.env.NEXT_GOVAI_API_RISKAI_EKONOMI_JP;
        generalEndpoint = process.env.NEXT_GOVAI_API_RISKAI_GENERAL_JP;
    } else if (country === 'PH') {
        politikEndpoint = process.env.NEXT_GOVAI_API_RISKAI_POLITIK_PH;
        ekonomiEndpoint = process.env.NEXT_GOVAI_API_RISKAI_EKONOMI_PH;
        generalEndpoint = process.env.NEXT_GOVAI_API_RISKAI_GENERAL_PH;
    } else {
        return res.status(400).json({ error: 'Unsupported country' });
    }

    try {
        const [politikResponse, ekonomiResponse, generalResponse] = await Promise.all([
            axios.get(politikEndpoint),
            axios.get(ekonomiEndpoint),
            axios.get(generalEndpoint)
        ]);

        if (politikResponse.status !== 200 || ekonomiResponse.status !== 200 || generalResponse.status !== 200) {
            throw new Error('One or more network responses were not ok');
        }

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
