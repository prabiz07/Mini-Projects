class Quote{
    constructor(){
        this.key = 'f2206946d4msh1f9aaada573c6eap1cde43jsn648ca7a5865b';
        this.host = 'quotes-inspirational-quotes-motivational-quotes.p.rapidapi.com';
    }

    async getQuote(){
        const response = await fetch('https://quotes-inspirational-quotes-motivational-quotes.p.rapidapi.com/quote?token=ipworld.info', {
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