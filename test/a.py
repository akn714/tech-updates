from exa_py import Exa
exa = Exa(api_key = "")
result = exa.search_and_contents(
    "scrape top 5 latest tech/ai update from these twitter accounts, OpenAIDevs, OpenAI, AnthropicAI, AIatMeta, skirano, xai, alexalbert__, rauchg, amasad, leeerob, nutlope, akshay_pachaar, replit, firecrawl_dev, v0, aisdk, googleaidevs, nickscamara_",
    summary=True
)
print(result)