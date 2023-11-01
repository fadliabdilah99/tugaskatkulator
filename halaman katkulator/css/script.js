const typingText = document.querySelector(".typing-text");
const word = "KATKULATORKU+-";
let charIndex = 0;

function type() {
  if (charIndex < word.length) {
    typingText.innerHTML += `<span style="color: indigo;">${word.charAt(charIndex)}</span>`;
    charIndex++;
    setTimeout(type, 150);
  }
}

type();
