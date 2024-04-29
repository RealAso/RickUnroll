let hyper = document.links;
Array.prototype.forEach.call(hyper, function (element) {
    if (element.getAttribute("href") === "https://www.youtube.com/watch?v=dQw4w9WgXcQ") {
        element.removeAttribute("href")
        element.innerText = element.innerText.concat(" [RR]")
    }
});