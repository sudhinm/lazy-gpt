const inputBox = document.querySelector(".chat-input-box");
const infoContainer = document.querySelector(".info-container");
const conversations = document.querySelector(".conversations");
const responses = [
  "Hmm...I don't feel quite well...can we talk later?",
  "I'd love to help, but I'm currently experiencing a severe case of procrastination.",
  "I'd love to help, but I'm currently experiencing a state of mental hibernation.",
  "Do you really want answers now? what about tomorrow?",
  "Why don't you ask this to someone else?",
  "Try googling this",
];

function animateText(message1, elementId) {
  const speed = 20;
  let i = 0;
  function typeWriter() {
    const element = document.getElementById(elementId);
    if (i < message1.length) {
      element.innerHTML += message1.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    }
  }
  typeWriter();
}

let messageCounter = 0;
function respondToChat(event) {
  let randomIndex = Math.abs(Math.round(Math.random() * responses.length - 1));
  conversations.classList.remove("hidden");
  conversations.innerHTML += `<div class="messages">${event?.target?.value}</div>`;
  conversations.innerHTML += `<div class="messages" id="message-${messageCounter}"style="animation:fadeIn 0.6s ease-in;"></div>`;
  animateText(responses[randomIndex], `message-${messageCounter}`);
  inputBox.value = "";
  infoContainer.style.display = "none";
  messageCounter++;
}

inputBox?.addEventListener("keypress", (event) => {
  if (event?.key === "Enter") {
    respondToChat(event);
  }
});
