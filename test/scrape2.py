import requests

# Replace with your actual Exa.ai API key
API_KEY = 'your_exa_ai_api_key'

# List of URLs to scrape
urls = [
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
]

# Endpoint for Exa.ai API
API_ENDPOINT = 'https://api.exa.ai/v1/extract'

# Headers for the API request
headers = {
    'Authorization': f'Bearer {API_KEY}',
    'Content-Type': 'application/json',
}

# Function to scrape content from a single URL
def scrape_url(url):
    payload = {
        'url': url,
        'format': 'markdown'  # You can change this to 'html' or 'text' if needed
    }
    response = requests.post(API_ENDPOINT, headers=headers, json=payload)
    if response.status_code == 200:
        return response.json()
    else:
        print(f"Failed to scrape {url}: {response.status_code}")
        return None

# Loop through the URLs and scrape content
for url in urls:
    print(f"Scraping {url}...")
    result = scrape_url(url)
    if result:
        print(result)  # You can save this result to a file or process it further