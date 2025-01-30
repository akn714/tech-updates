import requests

url = "https://api.exa.ai/search"

payload = {
    "query": "I want you to scrape top 5 latest tech news updates around AI, GenAI, Agents, LLMs, Models, etc. and list them in a formate that it should contain a headline, a blog like short description and a reference link.",
    "useAutoprompt": True,
    "type": "auto",
    "category": "research paper",
    "numResults": 10,
    "includeDomains": [
        "https://x.com/OpenAIDevs",
        "https://x.com/OpenAI",
        "https://x.com/AnthropicAI",
        "https://x.com/AIatMeta",
        "https://x.com/skirano",
        "https://x.com/xai",
        "https://x.com/alexalbert__",
        "https://x.com/rauchg",
        "https://x.com/amasad",
        "https://x.com/leeerob",
        "https://x.com/nutlope",
        "https://x.com/akshay_pachaar",
        "https://x.com/replit",
        "https://x.com/firecrawl_dev",
        "https://x.com/v0",
        "https://x.com/aisdk",
        "https://x.com/googleaidevs",
        "https://x.com/nickscamara_",
    ],
    # "includeDomains": [
    #     "https://techcrunch.com",
    #     "https://www.theverge.com",
    #     "https://www.wired.com",
    #     "https://arstechnica.com",
    #     "https://news.ycombinator.com",
    #     "https://www.engadget.com",
    #     "https://www.cnet.com",
    #     "https://www.zdnet.com"
    # ],
    # "excludeDomains": ["<string>"],
    "startCrawlDate": "2023-01-01T00:00:00.000Z",
    "endCrawlDate": "2023-12-31T00:00:00.000Z",
    "startPublishedDate": "2023-01-01T00:00:00.000Z",
    "endPublishedDate": "2023-12-31T00:00:00.000Z",
    "includeText": ["large language model"],
    "excludeText": ["course"],
    "contents": {
        "text": True,
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
}
headers = {
    "x-api-key": "a3bb1cc7-b097-4c6a-bdb6-943ce5a174a6",
    "Content-Type": "application/json"
}

response = requests.request("POST", url, json=payload, headers=headers)

print(response.text)


