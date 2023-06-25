import { AddTodo } from "./components/AddTodo";
import { TodoList } from "./components/TodoList";
import { Provider as ReduxProvider } from "react-redux";
import { store } from "./store";

export const App = () => {
  return (
    <ReduxProvider store={store}>
      <TodoList></TodoList>
      <AddTodo></AddTodo>
    </ReduxProvider>
  );
};

export default App;
