document.addEventListener('DOMContentLoaded', function () {

    let button = document.createElement('button');
    button.innerText = 'Add Square';
    document.body.appendChild(button);
    divCounter = 1;
    let colors = [
        'red',
        'green',
        'blue',
        'cyan',
        'magenta',
        'yellow',
        'black',
        'purple'
    ];
    button.addEventListener('click', function () {
        let div = document.createElement('div');
        document.body.appendChild(div);
        div.id = divCounter;
        div.className = 'squareOne';
        divCounter++;

        div.addEventListener("mouseover", function () {
            div.innerText = div.id;
            div.addEventListener("mouseout", function () {
                div.innerText = "";
            })
            div.addEventListener("click", function () {
                div.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            })
            div.addEventListener("dblclick", idCheck);

        })
        function idCheck() {
            if (div.id % 2 === 0) {
                if (div.nextElementSibling === null) {
                    alert("No box!!!!");
                } else {
                    div.nextElementSibling.remove();
                };
            } else {
                if (div.id % 2 !== 0) {
                    if (div.previousElementSibling === button) {
                        alert("No box!!!!");
                    } else {
                        div.previousElementSibling.remove();
                    }
                }
            }
        }
    });
});





