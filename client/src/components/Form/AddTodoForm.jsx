import React, { useState } from 'react';
import { TextInput, Button } from 'react-materialize';

const AddTodoForm = ({create}) => {
    const [task, setTask] = useState({text: ''})

    const createTodo = () => {
        if (task.text) {
            const newTodo = {
                ...task,
                id: Date.now().toString()
            }
            create(newTodo)
            setTask({text: ''})
        }
    }

    return (
        <div>
            <h4>Добавить задачу</h4>
            <form className="form form-login" onSubmit={(e) => e.preventDefault()}>
                <TextInput
                    type="text"
                    id="text"
                    name="input"
                    validate
                    label="Задача:"
                    value={task.text}
                    onChange={(e) => setTask({text: e.target.value})} />
                <Button
                    className="green"
                    type="submit"
                    waves="light"
                    onClick={createTodo}>
                        Добавить
                </Button>
            </form>
        </div>
    );
}

export default AddTodoForm;
