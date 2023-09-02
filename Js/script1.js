
window.addEventListener("load", (event) => {
    let length = localStorage.length;
    for(i = 0;i < length;i++) {

        let key = localStorage.key(i);

        let todo = JSON.parse(localStorage.getItem(key));
        document.getElementsByClassName("title-label")[i].innerHTML = todo.Title;
        document.getElementsByClassName("description-label")[i].innerHTML = todo.Description;
        document.getElementsByClassName("btn")[i].setAttribute("id",key);

        if (todo.Finish == true) {
            document.getElementsByClassName("tick")[i].src = "../Images/correct-green.png";
        } else {
            document.getElementsByClassName("tick")[i].src = "../Images/correct-black.png";
        }
    }
});

function viewTodo(clicked_id) {
    window.location.href = "../Html/editTask.html";
    todo = JSON.parse(localStorage.getItem(clicked_id));
    sessionStorage.setItem("id",clicked_id);
}