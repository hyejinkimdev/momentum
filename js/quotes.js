const quotes = [
    {
        quote: "You are on the verge of something great. Don't quit. Keep pushing yourself, Jin. I'm proud of you for being so determined.",
        author: "Hyejin",
    },
    {
        quote: "Be careful with your words when you are angry. They can be only forgiven, not forgotten.",
        author: "Sam",
    },
    {
        quote: "Trust the process. Your time is coming. Just do the work and the results will handle themselves.",
        author: "Tim",
    },
    {
        quote: "One day all those late nights and early mornings will pay off.",
        author: "Asa",
    },
    {
        quote: "Sometimes when things are falling apart they may actually be falling into place.",
        author: "Minyoung",
    },
    {
        quote: "Don't give up because of one bad chapter in your life. Keep going, your story doesn't end here. ",
        author: "honey",
    },
    {
        quote: "Your hardest times often lead to the greatest moments of your life. Keep the faith. It will all be worth it in the end.",
        author: "John",
    },
    {
        quote: "In case no one told you today: *name*, you are stronger than you think and you are doing great.",
        author: "Luiz",
    },
    {
        quote: "Don't cry because they left. Smile because they gave you an opportunity to find someone better. ",
        author: "Jonas",
    },
    {
        quote: "Life only has one rule: Never quit. ",
        author: "Sandy",
    },
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
