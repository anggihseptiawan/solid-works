import { Route, Routes } from "solid-app-router";
import { Component, createSignal } from "solid-js";
import { InputTodo } from "./components/InputTodo";
import { About } from "./components/About";
import { Todos } from "./components/Todo";

interface Todo {
  id: string;
  title: string;
}

const App: Component = () => {
  const [todos, setTodos] = createSignal<Todo[]>([]);

  fetch("/src/assets/data.json")
    .then((res) => res.json())
    .then(({ data }) => setTodos(data));

  const addTodo = (data: string) => {
    setTodos([
      ...todos(),
      {
        id: String(Math.random()),
        title: data,
      },
    ]);
  };

  const deleteTodo = (id: string) => {
    const filteredTodo = todos().filter((todo) => todo.id !== id);
    setTodos(filteredTodo);
  };

  return (
    <div class="w-3/4 m-auto pt-6">
      <header class="mb-5">
        <p class="font-bold text-xl mb-2">Solid Works</p>
        <nav>
          <a class="hover:bg-teal-500 hover:text-white mr-4" href="/">
            /home
          </a>
          <a class="hover:bg-teal-500 hover:text-white" href="/about">
            /about
          </a>
        </nav>
      </header>

      <main style={{ padding: "20px 0" }}>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <InputTodo handleAddTodo={(data: string) => addTodo(data)} />
                <Todos todos={todos} handleClick={(id) => deleteTodo(id)} />
              </>
            }
          />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
