import React from "react";
import "../assets/style.css";

const TodoList = (props) => {
    const { viewTodo, deleteTodo } = props;
    let todoArr =
        props.todoArr.length > 0
            ? props.todoArr
            : JSON.parse(localStorage.getItem("todos"));

    return (
        <div className="todo-list">
            <ul>
                {todoArr && todoArr.length > 0
                    ? todoArr.map((el, i) => (
                        <li key={i}>
                            <div>{el.title}</div>
                            <div className="icon">
                                <i
                                    title="view"
                                    className="fas fa-eye  pointer"
                                    onClick={() => viewTodo(i)}
                                />
                                <i
                                    title="delete"
                                    className="fas fa-trash-alt pointer"
                                    onClick={() => deleteTodo(i)}
                                />
                            </div>
                        </li>
                    ))
                    : null}
            </ul>
        </div>
    );
};

export default TodoList;
