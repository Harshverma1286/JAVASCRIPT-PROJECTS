const api_url = "https://cors-anywhere.herokuapp.com/https://api.api-ninjas.com/v1/quotes";  // API Ninjas URL with CORS Proxy

async function getquote(url) {
    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'X-Api-Key': 'lsD+Z1lFMrgjLSMuXaVDpQ==ttwtkg7Px5rbZtzZ',  // API Key header
                'Content-Type': 'application/json'
            }
        });
        
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }

        var data = await response.json();  // Parsing the response to JSON
        console.log(data);  // Output the fetched quote data
    } catch (error) {
        console.error('There was an error with the fetch operation:', error);  // Catch any errors during the fetch
    }
}

getquote(api_url);  // Call the function to fetch and log the quote
