const text = `
function helloWorld() {
  console.log("Hello from coding world!");
}

helloWorld();
`;

let i = 0;
const speed = 50;

function typeWriter() {
  if (i < text.length) {
    document.getElementById("code").innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

typeWriter();