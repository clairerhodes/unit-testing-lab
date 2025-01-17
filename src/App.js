import './App.css';
import {useState} from 'react';
import TodoList from './TodoList';
import AddTodo from './AddTodo';

const App = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (newTodo) => {
    setTodos([...todos, { id: Date.now(), text: newTodo}])
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <>
      <div className="app">
        <h1>Todo List</h1>
        <AddTodo addTodo={addTodo} />
        <TodoList todos={todos} deleteTodo={deleteTodo} />
      </div>
    </>
  )
}
export default App;
