const options = {
    method: 'POST',
    headers: {'x-api-key': '<api-key>', 'Content-Type': 'application/json'},
    body: '{"urls":["https://x.com/OpenAIDevs","https://x.com/OpenAI","https://x.com/AnthropicAI","https://x.com/AIatMeta","https://x.com/skirano","https://x.com/xai","https://x.com/alexalbert__","https://x.com/rauchg","https://x.com/amasad","https://x.com/leeerob","https://x.com/nutlope","https://x.com/akshay_pachaar","https://x.com/replit","https://x.com/firecrawl_dev","https://x.com/v0","https://x.com/aisdk","https://x.com/googleaidevs","https://x.com/nickscamara_"],"ids":["https://arxiv.org/pdf/2307.06435"],"text":true,"highlights":{"numSentences":1,"highlightsPerUrl":1,"query":"Key advancements"},"summary":{"query":"Main developments"},"livecrawl":"always","livecrawlTimeout":1000,"subpages":1,"subpageTarget":"sources","extras":{"links":1,"imageLinks":1}}'
  };
  
  fetch('https://api.exa.ai/contents', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));