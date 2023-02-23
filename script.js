const toDos = [];

//Funcion para crear ToDo
const createTodo = () => {
    let input = document.getElementById('primary')
    //Si el input no tiene nada no hacemos nada
    if(input.value == "")return false;

    //Caso contrario agregamos el valor del input al array
    toDos.push(input.value)
    updatePage(toDos)
    input.value = "";
    return false
}

//Eliminar ToDo
const removeToDo = (index) => {
    toDos.splice(index, 1)
    updatePage(toDos)
}

//Update page
const updatePage = (todos) => {
    let todoContainer = document.getElementById('todo-container')
    //Limpiamos para que no vuelva a repetir el valor que tenia
    todoContainer.innerHTML = "";

    //Mapeamos los todos del array
    todos.map((todo, i) => {
        //creamos un nuevo div
        const div = document.createElement('div');
        div.className = "todo"
        //le ponemos un child parrafo
        div.appendChild(document.createElement('p'));
        //le pasamos la data del todo
        div.querySelector("p").innerHTML = todo;
        //Creamos el boton borrar en cada div y le damos su evento
        const deleteButton = document.createElement('button');
        deleteButton.innerHTML = "Delete This";
        deleteButton.onclick = function(){
            removeToDo(i)
        }
        div.appendChild(deleteButton);
        todoContainer.appendChild(div)
    })
}
