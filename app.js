const express = require('express');
const path = require('path');
const { POST } = require('./script');

const app = express();
const port = 3000;

app.use(express.json());

app.use(express.static(path.join(__dirname, 'views')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.post('/scrape-ai-updates', async (req, res) => {
    try {
        console.log('/scrape-ai-updates');
        console.log(req.body.accountUrls);

        const response = await POST({ json: () => Promise.resolve(req.body) });

        res.status(200).json(JSON.parse(response.body));
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});