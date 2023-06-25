import { useSelector } from "react-redux";

export const TodoList = () => {
  const todos = useSelector((store) => store.todo);

  console.log(todos);

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo}>{todo}</li>
      ))}
    </ul>
  );
};
