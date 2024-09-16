var input = document.querySelector("#input");
var array = [];

var printArr = document.querySelector("#renderArr")

function renderArray() {

    printArr.innerHTML = ""
    for (var i = 0; i < array.length; i++) {
        printArr.innerHTML += `<li>${array[i]}
        <button onclick = "deleteTodo(${i})">delete</button>
        <button onclick = "editTodo(${i})">edit</button>
        </li>`
    }

}


function submit() {
    // console.log(input.value)
    array.push(input.value)
    // console.log(array);
    renderArray()
    input.value = ""

}

function deleteTodo(index){
    array.splice(index, 1);
    renderArray()
}

function editTodo(index) {
    var updatedVal = prompt('enter updated value');
    array.splice(index , 1 , updatedVal);
    renderArray()
}