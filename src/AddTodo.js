import {useState} from 'react';

const AddTodo = ({addTodo}) => {
    const [newTodo, setNewTodo] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        if (newTodo.trim() !== ''){ // take out white space and add only text content
            addTodo(newTodo);
            setNewTodo('');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="todo-item">
            <input
                type="text"
                value={newTodo}
                onChange={(event) => setNewTodo(event.target.value)}
                placeholder="Add a new todo..."
            />
            <button type="submit">Add!</button>
        </form>
    );
}

export default AddTodo;