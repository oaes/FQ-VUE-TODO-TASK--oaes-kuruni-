import React from 'react';

const Form = ({ setInputText, inputText, todo, setTodo }) => {
    const inputTextHandler = (e) => {
        console.log(e.target.value);
        setInputText(e.target.value)
    }
    const submitTodoHandler = (e) => {
        e.PreventDefault();
        setTodo([
            ...todo,
            { text: inputText, completed: false, id: Math.random() * 100 }])
        setInputText('');
    }
    return (
        <div>
            <form>
                <input value={inputText} onChange={inputTextHandler} type="text" className="todo-input" />
                <button onClick={submitTodoHandler} className="todo-button" type="submit">
                    <i className="fas fa-plus-square"></i>
                </button>
                <div className="select">
                    <select name="todo" className="filter-todo">
                        <option value="all">All</option>
                        <option value="completed">Completed</option>
                        <option value="uncompleted">Uncompleted</option>
                    </select>
                </div>
            </form>
        </div>
    );
};

export default Form;