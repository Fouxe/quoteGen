let quote = ['wabalubadubdub','pain peko','preach what you perform'];
let randomizer = Math.floor(Math.random()* quote.length);
let quoteGen = () => {
    return console.log(quote[randomizer]);
};
quoteGen();