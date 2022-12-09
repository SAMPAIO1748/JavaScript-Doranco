let links = document.querySelectorAll("aside a");
console.log(links);

for (let i = 0; i < links.length; i++) {
  links[i].addEventListener("click", function (event) {
    event.preventDefault();
    let link = links[i].getAttribute("href");
    console.log(link);
    document.querySelector("#big img").setAttribute("src", link);
  });
}
