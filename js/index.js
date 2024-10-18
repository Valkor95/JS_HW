(function () {
    class ToDoList{
        constructor() {
            this.todoInput = document.getElementById('todo-input');
            this.addBtn = document.getElementById('add-btn');
            this.todoList = document.getElementById('todo-list');

            this.addTodo = this.addTodo.bind(this);
            this.removeTodo = this.removeTodo.bind(this);
            this.addToServer = this.addToServer.bind(this);

            this.addBtn.addEventListener('click', this.addTodo);
        }

        addTodo(){
            const taskText = this.todoInput.value;
            if (taskText){
                const listItem = document.createElement('li');
                listItem.textContent = taskText;

                const removeBtn = document.createElement('button');
                removeBtn.textContent = 'Remove';
                removeBtn.addEventListener('click', this.removeTodo);

                listItem.append(removeBtn);
                this.todoList.append(listItem);

                this.todoInput.value = '';
            }
            this.addToServer(taskText)
        }

        removeTodo(event){
            const listItem = event.target.parentElement;
            this.todoList.removeChild(listItem);
        }

        addToServer(value){
            const serverUrl = 'http://localhost:3000/api/users/'

            fetch(serverUrl, {
                method: 'POST',
                body: JSON.stringify({id: Date.now().toString(), name: value}),
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(result => {
                console.log(result)
            })
        }
    }

    document.addEventListener('DOMContentLoaded', () => {
        new ToDoList();
    })
})()