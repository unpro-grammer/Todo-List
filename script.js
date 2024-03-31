const inputBox = document.getElementById("input-box");
const listWrapper = document.getElementById("list-wrapper");
function addItem() {
  if(inputBox.value === "") {
    alert("The task can't be empty!");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listWrapper.appendChild(li);

    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  inputBox.value = "";
}