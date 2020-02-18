const listContainer = document.getElementById('list-container');
const fetchURL = 'https://jsonplaceholder.typicode.com/todos';
const userId = document.getElementById("user-id-filter");
const idFrom = document.getElementById("id-from-filter");
const idTo = document.getElementById("id-to-filter");
const completed = document.getElementById("completed");
let taskList;

function filtering() {
  clearing()
  fetch(fetchURL).then(response => response.json())
    .then(json => {
      taskList = json;
      let thisParticularTask = taskList.filter(function(task) {
        return task.userId == userId.value &&
               task.id >= idFrom.value &&
               task.id <= idTo.value &&
               task.completed == completed.checked
      });
      console.log(thisParticularTask);

      thisParticularTask.forEach(function(task, i) {
        let myHeading = document.createElement("p");
        myHeading.innerHTML = ` ${task.id} ${task.title} `;
        listContainer.appendChild(myHeading);
      });
    });
}

function clearing() {
  while (listContainer.firstChild) {
    listContainer.removeChild(listContainer.lastChild);
  }
}
