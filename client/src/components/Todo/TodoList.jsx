import React from 'react';
import TodoItem from './TodoItem'


const TodoList = ({ todos, completeTodo, importantTodo, removeTodo }) => {
    return (
        <div>
            <h4>Активные задачи:</h4>
            <div className="todos">
                {
                    todos.map((todo, index) =>
                        <TodoItem key={index} todo={todo} index={index} completeTodo={completeTodo} importantTodo={importantTodo} removeTodo={removeTodo} />
                    )
                }
            </div>
        </div>
    );
}

export default TodoList;
