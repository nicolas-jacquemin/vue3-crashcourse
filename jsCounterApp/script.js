const counter = document.querySelector("#counter");

document.querySelector("#minus").addEventListener("click", () => {
    counter.innerHTML = Number(counter.innerHTML) -1;
});

document.querySelector("#plus").addEventListener("click", () => {
    counter.innerHTML = Number(counter.innerHTML) +1;
});