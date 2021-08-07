class Profile{
    // Fetch random profile from random user API
    async getProfile(){
        const response = await fetch('https://randomuser.me/api/', {
            method: 'GET',
            headers: {
                'content-type': 'application/json'
            }
        });
        const responseDate = await response.json();
        return responseDate;
    }
}