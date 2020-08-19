// This is a small set of basically random 'catch alls' for anything that the user enters outside of the possible trigger phrases

const alternative = [
    "I love you as certain dark things are to be loved, in secret, between the shadow and the soul.",
    "We the mortals touch the metals,the wind, the ocean shores, the stones,knowing they will go on, inert or burning,and I was discovering, naming all the these things: it was my destiny to love and say goodbye.",
    "In one kiss, you'll know all I haven't said.",
    "I want to do with you what spring does with cherry trees.",
    "Soy el desesperado, la palabra sin ecos, el que lo perdiò todo, y el que todo lo tuvo.",
    "Dark is the world’s night without you my love.",
    "Quiero saltar al agua para caer al cielo. (Agua dormida).",
    "As if you were on fire from within. The moon lives in the lining of your skin.",
    "You can cut all the flowers but you cannot keep Spring from coming.",
    "Let us forget with generosity those who cannot love us.",
    "Laughter is the language of the soul.",
    "To feel the love of people whom we love is a fire that feeds our life.",
    "And one by one the nights between our separated cities are joined to the night that unites us."
];


// Good practice: JS will not run until the HTML has loaded (Else event listener would respond every time we pressed the enter key!)

document.addEventListener("DOMContentLoaded", () => {
	const inputField = document.getElementById("input")
	inputField.addEventListener("keydown", function(e) {
		if (e.code === "Enter" && inputField.value.length > 0) {
            
            const input = inputField.value;
            inputField.value = "";
            output(input);
            
            const out = document.querySelector('#output');
            out.scrollTop = out.scrollHeight - out.clientHeight;    
        }
  });
});


// first output -> reply
function output(input) {
    const product = alternative[Math.floor(Math.random() * alternative.length)];
    addChat(input, product);
}

// second output -> reply log history
function addChat(input, product) {
    const mainDiv = document.getElementById("output");

    const userDiv = document.createElement("div");
    userDiv.id = "user";
    userDiv.innerHTML = `<span id="user-response">👱 ${input}</span>`;
    mainDiv.appendChild(userDiv);

    const botDiv = document.createElement("div");
    botDiv.id = "bot";
    botDiv.innerHTML = `<span id="bot-response">🤖 ${product}</span>`;
    mainDiv.appendChild(botDiv);
}


