class UI{
    constructor(){
        this.outputImage = document.getElementById('imageDisplay');
        this.outputProfile = document.getElementById('profileDisplay');
    }

    // Show Image
    showImage(user){
        this.outputImage.innerHTML = `
            <img src="${user.results[0].picture.large}" alt="">
        `;
    }

    // Show Profile
    showProfile(user){
        this.outputProfile.innerHTML = `
            <ul class="list-group">
                <li class="list-group-item">Name: ${user.results[0].name.title} ${user.results[0].name.first} ${user.results[0].name.last}</li>
                <li class="list-group-item">Age: ${user.results[0].dob.age}</li>
                <li class="list-group-item">Gender: ${user.results[0].gender}</li>
                <li class="list-group-item">Email: ${user.results[0].email}</li>
                <li class="list-group-item">Phone: ${user.results[0].phone}</li>
                <li class="list-group-item">Address: ${user.results[0].location.street.name}, ${user.results[0].location.city}, ${user.results[0].location.state}</li>
                <li class="list-group-item">Country: ${user.results[0].location.country}</li>
            </ul>
        `;
    }
}