// This is a small set of basically random 'catch alls' for anything that the user enters outside of the possible trigger phrases

const alternative = [
    “I love you as certain dark things are to be loved, in secret, between the shadow and the soul.”,
    "here_1",
    "here_2",
    "here_3"
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


