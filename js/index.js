(function () {
    class ToDoList{
        constructor() {
            this.todoInput = document.getElementById('todo-input');
            this.addBtn = document.getElementById('add-btn');
            this.todoList = document.getElementById('todo-list');

            this.addTodo = this.addTodo.bind(this);
            this.removeTodo = this.removeTodo.bind(this);

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
        }

        removeTodo(event){
            const listItem = event.target.parentElement;
            this.todoList.removeChild(listItem);
        }
    }

    document.addEventListener('DOMContentLoaded', () => {
        new ToDoList();
    })
})()