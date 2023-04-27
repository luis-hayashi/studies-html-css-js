const form = document.getElementById('form');
const n = document.querySelector('#numero');
const result = document.querySelector('body');
const h2 = document.createElement('h3')

let res;

form.addEventListener("submit", (e) => {
    e.preventDefault();

    if(Number(n.value) <= 2)
    {
        result.appendChild(h2);
        h2.innerHTML = "Errado!";
    }
    else if(Number(n.value) === 3)
    {
        result.appendChild(h2);
        h2.innerHTML = "Issai! Vai ser eu, tu e mais 1 filho(a) 😎 </font>"
    }
    else if(Number(n.value) > 3)
    {
        result.appendChild(h2);
        h2.innerHTML = "Issai! Vai ser eu, tu e mais " + (Number(n.value) - 2) + " filhos 😎"
    }
})