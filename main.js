// Define UI vars


const jamList = document.querySelector('.collection');

const filter = document.querySelector('#filter');
const songInput = document.querySelector('#song');
const modalTrigger = document.querySelector('.modal-trigger');




// Get date

let d = new Date();
let y = d.toLocaleDateString('en-US');
var today = document.getElementById('tDate').innerText = y;


//Get time
myTimer();
var timeVar = setInterval(myTimer, 1000);

function myTimer() {
    let d = new Date();
    //let t = d.toLocaleTimeString();
    let t = d.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
    var tTime = document.getElementById('tTime').innerText = t;
}


// Load event listeners

loadEventListeners();

function loadEventListeners() {
    filter.addEventListener('keyup', filterTasks);
}


// Init modal

// document.addEventListener('DOMContentLoaded', function() {
//     $(document).ready(function(){
//         $('.modal').modal();
//     });
// })

// //Open clear task modal

// function openModal(e){
//     //var instance = M.Modal.getInstance(elem);
//     //this.open();   
//     e.preventDefault();  
// }

// Clear tasks function

// function clearTasks(e){
 
//     // Method A
//     // jamList.innerHTML = '';

//     // Method B - faster
//     while(jamList.firstChild) {
//         jamList.removeChild(jamList.firstChild);
//     }
//     // while there is still a first child (there is still something in the list) then remove it
//     // } else {
//     //     return false;
//     // }

//     localStorage.clear();
// }


// Filter tasks

function filterTasks(e){
    const text = e.target.value.toLowerCase();
    document.querySelectorAll('.collection-item span.context').forEach(function(task){
        const item = task.textContent.trim();
        //if no match, it equals -1
        if(item.toLowerCase().indexOf(text) != -1){
            task.parentElement.style.display = 'block';
        } else {
            task.parentElement.style.display = 'none';
        }      
    });

        function markFunction(){
            $("span.context").mark(text);
                 
        // unmark
            $("span.context").unmark({
                done: function(){
                    $("span.context").mark(text);
                }
            })
        }
        markFunction();
}

          
 


