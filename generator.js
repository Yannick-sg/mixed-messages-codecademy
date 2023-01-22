function time() {
   const hour = Math.floor(Math.random()*12 + 1);
   let daytime;
   if(Math.floor(Math.random()*1) === 0){
    daytime = 'am';
   } else {
    daytime = 'pm';
   }
   return `${hour}${daytime}`;
}

console.log(time());

console.log(`The time is ${time()} at test`);