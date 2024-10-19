(function () {
    class ToDoList{
        constructor() {
            this.serverUrl = 'http://localhost:3000/api/users/'
            this.todoInput = document.getElementById('todo-input');
            this.addBtn = document.getElementById('add-btn');
            this.getAllBtn = document.querySelector('#get-btn');
            this.todoList = document.getElementById('todo-list');

            this.addTodo = this.addTodo.bind(this);
            this.removeTodo = this.removeTodo.bind(this);
            this.addToServer = this.addToServer.bind(this);
            this.updateOnServer = this.updateOnServer.bind(this);
            this.deleteFromServer = this.deleteFromServer.bind(this);
            this.render =  this.render.bind(this);
            this.getAllData = this.getAllData.bind(this);

            this.addBtn.addEventListener('click', this.addTodo);
            this.getAllBtn.addEventListener('click', this.getAllData);
        }

        addTodo(){
            const taskText = this.todoInput.value;
            if (taskText){
                this.render(taskText)

                this.todoInput.value = '';
            }
            this.addToServer(taskText)
        }

        removeTodo(event){
            const listItem = event.target.parentElement;
            const taskId = listItem.dataset.id;


            this.deleteFromServer(taskId).then(() => {
                this.todoList.removeChild(listItem);
            }).catch(err => console.error('Error while deleting:', err))
        }

        addToServer(value){

            fetch(this.serverUrl, {
                method: 'POST',
                body: JSON.stringify({id: Date.now().toString(), name: value}),
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(response => response.json())
                .then(result => {
                this.render(result.name, result.id);
            })
                .catch(error => {
                    console.log('Error while adding:', error);
                })
        }

        updateOnServer(taskId, updatedValue){
            fetch(`${this.serverUrl}${taskId}`,{
                method: 'PUT',
                body: JSON.stringify({name: updatedValue}),
            })
        }

        deleteFromServer(taskId){
            return fetch(`${this.serverUrl}${taskId}`,{
                method: 'DELETE',
            }).then(response => {
                if(!response.ok){
                    throw new Error('Failed to delete task');
                }
            })
        }

        render(valueTodo){
            const listItem = document.createElement('li');
            listItem.textContent = valueTodo;

            const removeBtn = document.createElement('button');
            removeBtn.textContent = 'Remove';
            removeBtn.addEventListener('click', this.removeTodo);

            listItem.append(removeBtn);
            this.todoList.append(listItem);
        }

        getAllData(){
            fetch(this.serverUrl)
                .then(response => response.json())
                .then(data => {
                    data.forEach(item => {
                        this.render(item.name);
                    })
                })
                .catch(error => {
                    console.log('Something is wrong, try again!', error)
                });
        }
    }

    document.addEventListener('DOMContentLoaded', () => {
        new ToDoList();
    })
})()