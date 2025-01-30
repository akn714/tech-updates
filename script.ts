import Exa from 'exa-js';
require('dotenv').config();

const exa = new Exa(process.env.EXA_API_KEY);

async function POST(req) {
    try {
        const { accountUrls } = await req.json();
        console.log('Account URLs:', accountUrls);

        let allPosts = [];

        for (const url of accountUrls) {
            console.log('[+] scraping', url)
            const posts = await exa.searchAndContents(
                `site:${url} AI tech updates`, {
                type: "auto",
                use_autoprompt: true,
                numResults: 10,
                text: true,
                includeDomains: ['twitter.com', 'x.com'],
            });
            allPosts = allPosts.concat(posts.results);
        }

        const aiTechPosts = allPosts.filter(post =>
            post.text.toLowerCase().includes('ai') ||
            post.text.toLowerCase().includes('artificial intelligence')
        );

        const topPosts = aiTechPosts.slice(0, 6);

        const formattedPosts = topPosts.map(post => ({
            headline: post.title,
            description: post.text,
            referenceLink: post.url
        }));

        return new Response(JSON.stringify(formattedPosts), {
            headers: { 'Content-Type': 'application/json' },
        });
    } catch (error) {
        console.error('Error in POST function:', error);
        return new Response(JSON.stringify({ error: 'Internal Server Error' }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
        });
    }
}

module.exports = { POST };