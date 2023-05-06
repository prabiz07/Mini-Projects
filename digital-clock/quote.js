class Quote{
    constructor(){
        this.key = 'f2206946d4msh1f9aaada573c6eap1cde43jsn648ca7a5865b';
        this.host = 'quotes15.p.rapidapi.com';
        this.url = 'https://quotes15.p.rapidapi.com/quotes/random/'
    }

    async getQuote(){
        const response = await fetch(this.url, {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': this.key,
                'X-RapidAPI-Host': this.host
            }
        });

        const responseData = await response.json();
        return responseData;
    }
}