let id = sessionStorage.getItem("id");
let item = JSON.parse(localStorage.getItem(id));
document.getElementById("title").value = item.Title;
document.getElementById("description").value = item.Description;

if (item.Finish == true) {
    document.getElementById("right").src = "../images/correct-green.png";
} else {
    document.getElementById("right").src = "../images/correct-black.png";
}

let finishCounter1;

function finish() {
    finishCounter1 = false;
    var path = document.getElementById("right").getAttribute("src");
    if (path == "../images/correct-black.png") {
        finishCounter1 = true;
        document.getElementById("right").src = "../images/correct-green.png";
    } else {
        finishCounter1 = false;
        document.getElementById("right").src = "../images/correct-black.png";
    }
}

function updateData() {
    if (document.getElementById("title").value == "" && document.getElementById("discription").value == "") {
        window.alert("Some Field Are Empty !");
    } else {
        var title = document.getElementById("title").value;
        var description = document.getElementById("description").value;
        
        let todo = {
            Title:title,
            Description:description,
            Finish:finishCounter1
        }

        let obj = JSON.stringify(todo);
        localStorage.setItem(id,obj);
        window.location.href = "../index.html";
    }
}

function deleteData() {
    localStorage.removeItem(id);
    sessionStorage.clear();
    alert("Todo Deleted Successefully...");
    window.location.href = "../index.html";
}