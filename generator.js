function time() {
   const hour = Math.floor(Math.random()*12 + 1);
   let daytime;
   if(Math.floor(Math.random()*2) === 0){
    daytime = 'am';
   } else {
    daytime = 'pm';
   }
   return `${hour}${daytime}`;
}

const weather = ['rainy', 'sunny', 'stormy', 'cloudy', 'cold', 'warm'];
const countries = ['Italy', 'Austria', 'Indonesia', 'London', 'New York'];

const weatherCount = weather.length;
const countriesCount = countries.length;

function mixedMessage(){
    const comingWeather = weather[Math.floor(Math.random() * weather.length)];
    const chosenCountry = countries[Math.floor(Math.random() * countries.length)];

    console.log(`At ${time()} the weather in ${chosenCountry} is ${comingWeather}.`);
}

mixedMessage();