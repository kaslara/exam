import { useEffect, useState } from "react";
import { Outlet, useParams } from "react-router-dom";
import { ITodo } from "../../../interfaces/ITodo";
import Item from "./Item";

const Todos: React.FC = () => {
  const [todo, setTodo] = useState<ITodo[]>([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
    .then(res => res.json())
    .then(data => setTodo(data))
  }, []);
  return (
  
    <div>
      {todo.map(t => <div>{t.completed}</div>)}
    </div>
    
   );
   <Outlet />
};

export default Todos;
