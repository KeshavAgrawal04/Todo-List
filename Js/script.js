let finishCounter;

function finish() {
    finishCounter = false;
    var path = document.getElementById("right").getAttribute("src");
    if (path == "../images/correct-black.png") {
        finishCounter = true;
        document.getElementById("right").src = "../images/correct-green.png";
    } else {
        finishCounter = false;
        document.getElementById("right").src = "../images/correct-black.png";
    }
}

function addData() {
    if (document.getElementById("title").value == "" && document.getElementById("description").value == "") {
    } else {
        var title = document.getElementById("title").value;
        var description = document.getElementById("description").value;

        let todo = {
            Title: title,
            Description: description,
            Finish: finishCounter
        }

        let obj = JSON.stringify(todo);
        let maxKey;
        let length = localStorage.length;

        maxKey = Number(localStorage.key(0));

        if (localStorage.length == 0) {
            maxKey = 0;
        } else {
            for (i = 0; i < length; i++) {
                if (Number(localStorage.key(i)) > maxKey) {
                    maxKey = Number(localStorage.key(i));
                }
            }
        }

        alert(maxKey);
        maxKey++;

        localStorage.setItem(maxKey, obj);
        window.location.href = "../index.html";
    }
}

function deleteData() {
    window.location.href = "../index.html";
}

window.addEventListener("load", (event) => {
    let length = localStorage.length;
    let j = 0;

    for (i = length; i > 0; i--) {
        let key = localStorage.key(i - 1);
        let todo = JSON.parse(localStorage.getItem(key));
        document.getElementsByClassName("title-label")[j].innerHTML = todo.Title;
        document.getElementsByClassName("description-label")[j].innerHTML = todo.Description;

        if (todo.Finish == true) {
            document.getElementsByClassName("tick")[j].src = "images/correct-green.png";
        } else {
            document.getElementsByClassName("tick")[j].src = "images/correct-black.png";
        }
        j++;
    }
});


