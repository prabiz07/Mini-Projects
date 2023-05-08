// Quote and Temp Selector
const quoteSelector = document.querySelector('.quote');
const tempSelector = document.querySelector('.temp');

// Instantiate Quote Class from quote.js file
const quote = new Quote();

// Instantiate Weather class from weather.js file
const temp = new Weather();

// Function Get time
function getTime(){
    const time = new Date();
    const timeSelector = document.querySelector('.time');
    return(
        timeSelector.innerHTML = time.toLocaleTimeString('en-us', {hour:'2-digit', minute: '2-digit'})
    );
}
setInterval(getTime, 1000);


// Function Greeting
function greeting(){
    const date = new Date();
    const greetingSelector = document.querySelector('.greeting');
    const welcomeTypes = ['Good Morning', 'Good Afternoon', 'Good Evening'];
    let welcomeText = '';

    if(date.getHours() < 12) welcomeText = welcomeTypes[0];
    else if(date.getHours() < 18) welcomeText = welcomeTypes[1];
    else welcomeText = welcomeTypes[2];

    // Output the greeting text html
    greetingSelector.innerHTML = welcomeText;
}
greeting();

// Temparature Generator
temp.getWeather()
.then(data => {
    // Show Temperature
    tempSelector.innerHTML = `
        <div class="icon-set">
            <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}.png" alt="${data.weather[0].main}">
            <p>${data.weather[0].description}</p>
        </div>    
        <p>${Math.floor(data.main.temp)}&degC</p>
        <p>${data.name}, ${data.sys.country}</p>
    `;
});

// Output Quote
quote.getQuote()
.then(data => {
    // Show Quote
    quoteSelector.innerHTML = `
        <p>${data.content}</p>
        <p>- ${data.originator.name}</p>
    `;
})


    





