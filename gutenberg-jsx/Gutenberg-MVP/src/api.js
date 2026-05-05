
// Send API call to Claude, return response
export async function callClaude(apiKey, messages, systemPrompt = '')
{
    const response = await fetch('https://api.anthropic.com/v1/messages',
    {
        method: 'POST',
        headers:
        {
            'content-type': 'application/json',
            'x-api-key': apiKey,
            'anthropic-version': '2023-06-01',
            // API exposed in-browser for MVP/Final Project ONLY
            'anthropic-dangerous-direct-browser-access': 'true'
        },
        body: JSON.stringify(
        {
            model: 'claude-haiku-4-5',
            max_tokens: 1024,
            system: systemPrompt,
            messages: messages
        })
    })

    const data = await response.json();
    return data.content[0].text;
}