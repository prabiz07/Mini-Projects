// Instantiate profile class from profile.js
const profile = new Profile();

// Instantiate UI class from ui.js
const ui = new UI();

const userProfile = profileIterator(profile);

// call first profile
profileDisplay();

// Profile Iterator init
function profileIterator(userProfile){
    let nextIndex = 0;
    return{
        next: function(){
            return nextIndex < userProfile.length ?
            {value: userProfile[nextIndex++], done: false} :
            {done: true}
        }
    };
}

// Next Event 
document.getElementById('next').addEventListener('click', profileDisplay);

// Function profileDisplay Init
function profileDisplay(){
    // Get profile
    profile.getProfile()
    .then(data => {
        if(data !== undefined){
            ui.showImage(data);
            ui.showProfile(data);
        } else{
            window.location.reload();
        }
    })
}
