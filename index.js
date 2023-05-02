const text = document.querySelector(".text p");
text.innerHTML = text.innerText.split("").map((letter, i) =>
    `<span style="transform:rotate(${i * 16.4}deg")>${letter}</span>`
).join('');