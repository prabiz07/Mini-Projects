const date = new Date();
const quoteSelector = document.querySelector('.quote');

// Instantiate Quote Class from quote.js file
const quote = new Quote();

// Function Get time
function getTime(){
    const timeSelector = document.querySelector('.time');
    return(
        timeSelector.innerHTML = date.toLocaleTimeString('en-us', {hour:'2-digit', minute: '2-digit'})
    );
}
getTime();

// Function Greeting
function greeting(){
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

// Output Quote
quote.getQuote()
.then(data => {
    // Show Quote
    quoteSelector.innerHTML = `
        <p>${data.content}</p>
        <p>- ${data.originator.name}</p>
    `;
})


    





