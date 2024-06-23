
// let container =document.querySelector(".continer")
// const form = document.querySelector("form");
// let tasks =document.querySelector(".tasks");

// let ckecked ="false"
// let arrayofvalues=[]
// let tasksLocalStorage = []

// // Check if Theres Tasks In Local Storage
// if (localStorage.getItem("tasks")) {
//   arrayOfTasks = JSON.parse(localStorage.getItem("tasks"));
// }

// getDataFromLocalStorage();

// function getDataFromLocalStorage() {
//   let data = window.localStorage.getItem("tasks");
//   if (data) {
//     let tasks = JSON.parse(data);
//     addElementsToPageFrom(tasks);
//   }
// }

// function addDataToLocalStorageFrom(arrayOfTasks) {
//   window.localStorage.setItem("tasks", JSON.stringify(arrayOfTasks));
// }

// function toggleStatusTaskWith(taskId) {
//   for (let i = 0; i < arrayOfTasks.length; i++) {
//     if (arrayOfTasks[i].id == taskId) {
//       arrayOfTasks[i].completed == false ? (arrayOfTasks[i].completed = true) : (arrayOfTasks[i].completed = false);
//     }
//   }
//   addDataToLocalStorageFrom(arrayOfTasks);
// }
// let elementContainerhight =0;
// function createElement(event) {
//     event.preventDefault();

//     let taskInfo = JSON.parse(localStorage.getItem('tasks'));

//     // console.log(typeof taskInfo)

//     const arrayOfObjects = Object.values(taskInfo);

//     const inputElement = document.querySelector('input');

//     let id = new Date().getTime()
//   const value = inputElement.value;

//   const element = document.createElement('p');
//   element.innerHTML = value;
//   element.style.cssText = `
//     width: 280px;
//     height: 20px;
//     margin-right: 10px;
//     display: flex;
//     align-items: center;
//   `;

//   element.onclick =function() {
// element.style.cssText =`
// width: 280px;
//     height: 80px;
//     margin-right: 10px;
//     display: flex;
//     align-items: center;
// color: #555;
// text-decoration: line-through;`
// toggleStatusTaskWith(this.id)

//   }

//   const check =document.createElement("input");

//   check.setAttribute("type","radio")

// check.style.cssText =`
// margin-right:10px;
// display: flex;
//     justify-content: center;
//     align-items: center;
// `

// check.onclick =function () {
//   element.style.cssText =`
// width: 280px;
//     height: 20px;
//     margin-right: 10px;
//     display: flex;
//     align-items: center;
// color: #555;
// text-decoration: line-through;
// `
// toggleStatusTaskWith(this.id)
// }
//   const elementContainer = document.createElement('div');

//   elementContainer.appendChild(check);
//   elementContainer.appendChild(element);

//   elementContainer.className="todo-container"
//   elementContainer.style.cssText = `
//     width: 400px;
//     height: 30px;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     margin-top:40px;
//     margin-bottom:-25px;

//   `;
//   elementContainerhight+=40;

//   const deleteB = document.createElement('div');
//   /* deleteB.textContent = 'Delete'; */
//   // deleteB.setAttribute('type', 'submit');
//   // deleteB.setAttribute('value', 'Delete');
//   deleteB.innerHTML="x"
//   deleteB.style.cssText = `
//     height: 20px;
//     width: 20px;
//     color: #222;
//   `;

//   elementContainer.appendChild(deleteB);

//   tasks.style.cssText =`
//   height:80px;
//   `
//   tasks.appendChild(elementContainer)



//    tasks.insertAdjacentElement('beforebegin', elementContainer);

//   const task = {
//     id:`${id}`,
//     title:`${value}`,
//     complited:false
//   }


//   // Push Task To Array Of Tasks
//   arrayOfTasks.push(task);
//   // Add Tasks To Page
//   addElementsToPageFrom(arrayOfTasks);
//   // Add Tasks To Local Storage
//   addDataToLocalStorageFrom(arrayOfTasks);

//   /* Delete Button */

//   deleteB.onclick =function() {

//     elementContainer.remove();

//     const tasks = JSON.parse(localStorage.getItem('tasks'));

//     const button = document.querySelector('button');

//       const title = value;

//       const index = tasks.findIndex((task) => task.title === title);

//       if (index !== -1) {
//         tasks.splice(index, 1);

//         addDataToLocalStorageFrom(arrayOfTasks);
//       }


//   }

//   // arrayofvalues.push(value)
// }
// form.addEventListener('submit',createElement )

let container =document.querySelector(".container")
let input = document.querySelector(".input");
let submit = document.querySelector(".add");
let tasksDiv = document.querySelector(".tasks");

window.onload =function(event) {
  event.target.preventDefault();

}
// Empty Array To Store The Tasks
let arrayOfTasks = [];

// Check if Theres Tasks In Local Storage
if (localStorage.getItem("tasks")) {
  arrayOfTasks = JSON.parse(localStorage.getItem("tasks"));
}





// Trigger Get Data From Local Storage Function
getDataFromLocalStorage();

// Add Task
submit.onclick = function (event) {

  if (input.value !== "") {
    addTaskToArray(input.value); // Add Task To Array Of Tasks
    input.value = ""; // Empty Input Field
  }

};

// Click On Task Element
tasksDiv.addEventListener("click", (e) => {
  // Delete Button
  if (e.target.classList.contains("del")) {
    // Remove Task From Local Storage
    deleteTaskWith(e.target.parentElement.getAttribute("data-id"));
    // Remove Element From Page
    e.target.parentElement.remove();
  }
  // Task Element
  if (e.target.classList.contains("task")) {
    // Toggle Completed For The Task
    toggleStatusTaskWith(e.target.getAttribute("data-id"));
    // Toggle Done Class
    e.target.classList.toggle("done");
  }

});



function addTaskToArray(taskText) {
  // Task Data
  const task = {
    id: Date.now(),
    title: taskText,
    completed: false,
  };
  // Push Task To Array Of Tasks
  arrayOfTasks.push(task);
  // Add Tasks To Page
  addElementsToPageFrom(arrayOfTasks);
  // Add Tasks To Local Storage
  addDataToLocalStorageFrom(arrayOfTasks);
}
function addElementsToPageFrom(arrayOfTasks) {
  // Empty Tasks Div
  tasksDiv.innerHTML = "";
  // Looping On Array Of Tasks
  arrayOfTasks.forEach((task) => {
    // Create Main Div
    let div = document.createElement("div");
    div.className = "task";
    // Check If Task is Done
    if (task.completed) {
      div.className = "task done";
    }
    div.setAttribute("data-id", task.id);

    div.style.cssText=`
        width: 470px;
    height: 30px;
    display: grid;
    grid-template-columns:20px 1fr 40px;
    align-items: center;
    justify-content:center;
    background-color:white;
    border-radius:8px;
    padding-left:30px;
`

// create check button

  const check =document.createElement("div");
check.className="task2"


  if (task.completed) {
    check.className = "task2 done";
  }
  check.setAttribute("data-id", task.id);

check.style.cssText =`
margin-left:-10px;
flex-basis:10%;
width:18px;
height:18px;
background-color:rgba(245, 73, 10);
border-radius:2px;
`

check.addEventListener("click",function(e) {
// check Element
if (e.target.classList.contains("task2")) {
  // Toggle Completed For The Task
  toggleStatusTaskWith(e.target.getAttribute("data-id"));
  // Toggle Done Class
  e.target.classList.toggle("done");
  div.classList.toggle("done")
span.classList.add("no-Text-decoration")

}

})


// End check button

//append teh check button to the div with class task
div.appendChild(check);
    div.appendChild(document.createTextNode(task.title));
    div.style.cssText=`
    width: 470px;
    height: 30px;
    display: grid;
    grid-template-columns:20px 1fr 40px;
    align-items: center;
    justify-content:center;
    background-color:white;
    border-radios:5px;
    padding-left:30px;

    `

    // Create Delete Button
    let span = document.createElement("span");
    span.className = "del";
    span.classList.toggle("done");
    span.appendChild(document.createTextNode("Delete"));
    // Append Button To Main Div
    div.appendChild(span);
// style the the delete button
  span.innerHTML="x"
  span.style.cssText = `
    height: 20px;
    width: 20px;
    color: #222;
flex-basis:40%;

  `;
    // Add Task Div To Tasks Container
    tasksDiv.appendChild(div);

  });




}

function addDataToLocalStorageFrom(arrayOfTasks) {
  window.localStorage.setItem("tasks", JSON.stringify(arrayOfTasks));
}

function getDataFromLocalStorage() {
  let data = window.localStorage.getItem("tasks");
  if (data) {
    let tasks = JSON.parse(data);
    addElementsToPageFrom(tasks);
  }
}

function deleteTaskWith(taskId) {
  // For Explain Only
  // for (let i = 0; i < arrayOfTasks.length; i++) {
  //   console.log(`${arrayOfTasks[i].id} === ${taskId}`);
  // }
  arrayOfTasks = arrayOfTasks.filter((task) => task.id != taskId);
  addDataToLocalStorageFrom(arrayOfTasks);
}

function toggleStatusTaskWith(taskId) {
  for (let i = 0; i < arrayOfTasks.length; i++) {
    if (arrayOfTasks[i].id == taskId) {
      arrayOfTasks[i].completed == false ? (arrayOfTasks[i].completed = true) : (arrayOfTasks[i].completed = false);
    }
  }
  addDataToLocalStorageFrom(arrayOfTasks);
}