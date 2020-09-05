import React from 'react';
import Todo from './Todo';

const TodoList = ({ todo }) => {

    return (
        <div className='todo-container'>
            <ul className="todo-list">
                {todo.map((todo) => (
                    <Todo />
                ))}
            </ul>
        </div>
    );
};

export default TodoList;