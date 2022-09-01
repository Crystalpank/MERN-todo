import React from 'react';
import { Row, Col, Icon } from 'react-materialize';

const TodoItem = ({ todo, completeTodo, importantTodo, removeTodo, index }) => {
    let cls = ['flex todos-item']
    if (todo.completed) {
        cls.push("completed")
    }
    if (todo.important) {
        cls.push("important")
    }
    return (
        <Row className={cls.join(" ")}>
            <Col className="todos-num">{index + 1}</Col>
            <Col className="todos-text">{todo.text}</Col>
            <Col className="todos-buttons">
                <Icon className="blue-text" onClick={() => completeTodo(todo)}>check</Icon>
                <Icon className="orange-text" onClick={() => importantTodo(todo)}>warning</Icon>
                <Icon className="red-text" onClick={() => removeTodo(todo.id)}>delete</Icon>
            </Col>
        </Row>
    );
}

export default TodoItem;
