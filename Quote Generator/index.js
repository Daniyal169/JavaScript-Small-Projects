const quoteArr = [
    "Kohli goes down the ground, Kohli goes out of the ground!",
    "Batting like a Rolls Royce Babar Azam",
    "Carlos Brathwaite, remember the name!",
    "England win the World Cup by the barest of margins.",
    "Pakistan cricket at its best",
    "Dhoni finishes off in style. India lift the World Cup after 28 years!",
    "They cannot play him",
    "Sarfraz takes the catch its all over Pakistan win ",
    "It's a hat-trick for Malinga! He's done it again!",
    "An unbelievable shot from AB de Villiers!",
];

let authorArr = [
    "Harsha Bhogle ",
    "Ramiz Raja",
    "Ian Bishop ",
    "Ian Smith",
    "Nasir Hussain",
    "Ravi Shastri",
    "Nasir Hussain",
    "Ramiz Raja",
    "Michael Atherton",
    "David Lloyd",
]


let quote = document.getElementById("quote");
let author = document.getElementById("author");

const genQuote = () => {
    let start = 1;
    let end = 10;
    let index = start + Math.floor((end - start) * Math.random());

    let quotes = quoteArr[index];
    quote.innerHTML = quotes;

    let authors = authorArr[index];
    author.innerHTML = "~ " + authors

}



