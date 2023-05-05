// Get Time
const timeSelector = document.querySelector('.time');
const date = new Date();
timeSelector.innerHTML = date.toLocaleTimeString('en-us', {hour:'2-digit', minute: '2-digit'});
    
// Time Greeting
const greeting = document.querySelector('.greeting');
const welcomeTypes = ['Good Morning', 'Good Afternoon', 'Good Evening'];
let welcomeText = '';

if(date.getHours() < 12) welcomeText = welcomeTypes[0];
else if(date.getHours() < 18) welcomeText = welcomeTypes[1];
else welcomeText = welcomeTypes[2];

greeting.innerHTML = welcomeText;


    
    





