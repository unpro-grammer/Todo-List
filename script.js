const inputBox = document.getElementById("input-box");
const listWrapper = document.getElementById("list-wrapper");
function addItem() {
  if(!(inputBox.value === "")) {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listWrapper.appendChild(li);

    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  inputBox.value = "";
  saveState();
}

listWrapper.addEventListener("click", function(e) {
  if(e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
    saveState();

  } else if (e.target.tagName === "SPAN") {
    e.target.parentElement.remove();
    saveState();
  }
}, false);

function saveState() {
  localStorage.setItem("state", listWrapper.innerHTML);
}

function showState() {
  listWrapper.innerHTML = localStorage.getItem("state");
}

showState();

//enable ENTER key to add task in lieu of button-click

var input = document.getElementById("input-box")
input.addEventListener("keypress", function(v) {
  if (v.key === "Enter") {
    v.preventDefault();
    document.getElementById("add-button").click();
  }
});