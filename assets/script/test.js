let round = true;
let cells = document.querySelectorAll(".cell");
function addcoin(elem) {
    for (let i = elem.children.length - 1; i >= 0; i--) {
        if (!elem.children[i].hasAttribute("alreadyPlayed")) {
            elem.children[i].setAttribute("alreadyPlayed", "true");
            elem.children[i].style.background = round ? 'yellow' : 'red';
            i = -1
            round = !round
        }
    }
}
