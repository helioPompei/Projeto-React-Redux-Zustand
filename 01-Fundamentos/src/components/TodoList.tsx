import { useAppSelector } from "../store";

export const TodoList = () => {
  const todos = useAppSelector((store) => store.todo);

  return (
    <ul>
      {todos.map((todo: any) => (
        <li key={todo}>{todo}</li>
      ))}
    </ul>
  );
};
