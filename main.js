// Define UI vars

const jamList = document.querySelector(".collection");
const filter = document.querySelector("#filter");
const songInput = document.querySelector("#song");
const modalTrigger = document.querySelector(".modal-trigger");

// Get date

let d = new Date();
let y = d.toLocaleDateString("en-US");
var today = (document.getElementById("tDate").innerText = y);

// Load event listeners

loadEventListeners();

function loadEventListeners() {
  filter.addEventListener("keyup", filterTasks);
}

//Spinner

var spinner = document.querySelector(".spinner-1");
var hideSpinner;
function spinnerFunc() {
  spinner.style.display = "none";
}
var hideSpinner = setTimeout(spinnerFunc, 1500);

// Filter tasks

function filterTasks(e) {
  const text = e.target.value.toLowerCase();
  document
    .querySelectorAll(".collection-item span.context")
    .forEach(function (task) {
      const item = task.textContent.trim();
      //if no match, it equals -1
      if (item.toLowerCase().indexOf(text) != -1) {
        task.parentElement.style.display = "block";
      } else {
        task.parentElement.style.display = "none";
      }
    });

  function markFunction() {
    $("span.context").mark(text);

    // unmark
    $("span.context").unmark({
      done: function () {
        $("span.context").mark(text);
      },
    });
  }
  markFunction();
}
