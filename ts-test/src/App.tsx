//https://jsonplaceholder.typicode.com/todos
import { useState, useEffect } from "react";

interface Todo {
  id: string;
  title: string;
  userId: number;
  completed: boolean;
}
const App = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((data) => setTodos(data))
      .catch((err) => console.error(err));
    console.log(todos);
  }, []);
  return (
    <div className="App_1">
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
