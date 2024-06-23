
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