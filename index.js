const inputBox = document.getElementById("input-box");
const listContainer = document.querySelector(".List-container");

// Function to add a new task
function addTask() {
  // Check if the input box is empty
  if (inputBox.value === "") {
    alert("You must write something!");
  } else {
    // Create a new list item
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  inputBox.value = "";
  saveData()
}

// Function to handle click events on the list container
listContainer.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      // Remove the parent list item when the delete icon is clicked
      e.target.classList.toggle("checked");
      saveData()
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove("checked");
      saveData()
    }
  },
  false
);

function saveData() {
  localStorage.setItem("data", listContainer.innerHTML);
}

function showTask() {
  listContainer.innerHTML = localStorage.getItem("data");
}

showTask();
