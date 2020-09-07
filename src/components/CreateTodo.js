import React, { useState } from 'react';
import '../assets/style.css'
import TodoList from './TodoList';
import swal from '@sweetalert/with-react'

const CreateTodo = () => {

    const [todo, setTodo] = useState({ title: '', done: false })
    const [todoArr, setTodoArr] = useState([])

    let todos = localStorage.hasOwnProperty('todos') ? JSON.parse(localStorage.getItem('todos')) : []

    const onChange = (event) => {
        let { value } = event.target
        let obj = {}
        obj['title'] = value
        obj['done'] = false
        setTodo(obj)
    }

    const createTodo = (event) => {
        const { name } = event.target
        if (event.key === "Enter" || name === "addTodo") {
            if (todo.title !== '') {
                todos.unshift(todo)
                localStorage.setItem('todos', JSON.stringify(todos))
                setTodo({ title: '', done: false })
            } else {
                swal('oops', 'please write todo first', 'error')
            }
        }
    }

    const viewTodo = (i) => {
        if (todos[i][''] !== true) {
            todos[i][''] = true
            localStorage.setItem('todos', JSON.stringify(todos))
            setTodoArr(todos)
            swal({
                text: 'Everything is fine!',
                icon: 'success',
                buttons: true
            })
        }
    }



    const deleteTodo = (i) => {
        swal({
            title: 'Are you sure?',
            text: 'Once deleted, you will not be able to recover this file!',
            icon: 'warning',
            buttons: true,
            dangerMode: true
        }).then(res => {
            if (res) {
                todos.splice(i, 1)
                localStorage.setItem('todos', JSON.stringify(todos))
                setTodoArr(todos)
            }
        })
    }
    return (
        <>
            <div className='box'>
                <div className="text">
                    <h2>ToDo App</h2>
                </div>
                <div className='inputBox'>
                    <input type="text" name='todo' placeholder='write down your todo' value={todo.title} onKeyPress={createTodo} onChange={onChange} />
                    <button className='btn' name='addTodo' type='button' onClick={createTodo}>Add ToDo</button>
                </div>
            </div>
            <TodoList todoArr={todoArr} viewTodo={viewTodo} deleteTodo={deleteTodo} />
        </>
    );
};

export default CreateTodo;