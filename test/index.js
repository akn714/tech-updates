const express = require('express');
const axios = require('axios');
const app = express();
const port = 3000;

app.use(express.json()); // Middleware to parse JSON bodies

app.post('/get-tech-updates', async (req, res) => {
    const url = "https://api.exa.ai/search";

    const payload = {
        "query": "I want you to scrape top 5 latest tech news updates around AI, GenAI, Agents, LLMs, Models, etc. and list them in a format that it should contain a headline, a blog-like short description, and a reference link.",
        "useAutoprompt": true,
        "type": "auto",
        "category": "research paper",
        "numResults": 10,
        "includeDomains": [
            "https://techcrunch.com",
            "https://www.theverge.com",
            "https://www.wired.com",
            "https://arstechnica.com",
            "https://news.ycombinator.com",
            "https://www.engadget.com",
            "https://www.cnet.com",
            "https://www.zdnet.com"
        ],
        "startCrawlDate": "2023-01-01T00:00:00.000Z",
        "endCrawlDate": "2023-12-31T00:00:00.000Z",
        "startPublishedDate": "2023-01-01T00:00:00.000Z",
        "endPublishedDate": "2023-12-31T00:00:00.000Z",
        "includeText": ["large language model"],
        "excludeText": ["course"],
        "contents": {
            "text": true,
            "highlights": {
                "numSentences": 1,
                "highlightsPerUrl": 1,
                "query": "Key advancements"
            },
            "summary": {"query": "Main developments"},
            "livecrawl": "always",
            "livecrawlTimeout": 1000,
            "subpages": 1,
            "subpageTarget": "sources",
            "extras": {
                "links": 1,
                "imageLinks": 1
            }
        }
    };

    const headers = {
        "x-api-key": "YOUR_API_KEY_HERE", // Replace with your actual API key
        "Content-Type": "application/json"
    };

    try {
        const response = await axios.post(url, payload, { headers });
        res.json(response.data); // Send back the response from the API
    } catch (error) {
        console.error(error);
        res.status(500).send("Error fetching tech news");
    }
});

{
    data: [
        {
            title: 'headline 1',
            descrpiption: '',
            reference_link: ''
        },
        {
            title: 'headline 2',
            descrpiption: '',
            reference_link: ''
        }
    ]
}

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});