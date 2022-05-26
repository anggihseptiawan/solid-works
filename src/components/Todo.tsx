import { For } from "solid-js";

interface Todo {
  id: string;
  title: string;
}

interface TodoProps {
  todos: () => Todo[];
  handleClick: (id: string) => void;
}

export const Todos = ({ todos, handleClick }: TodoProps) => (
  <div class="todo-lists">
    <For each={todos()}>
      {(todo, idx) => (
        <div class="item mb-2">
          <input class="accent-teal-400" type="checkbox" id={`todo-${idx()}`} />
          <label for={`todo-${idx()}`} style={{ margin: "10px" }}>
            {todo.title}
          </label>
          <button
            class="bg-gray-200 hover:bg-red-500 hover:text-white pb-1 px-3 rounded-sm"
            onClick={() => handleClick(todo.id)}
          >
            &times;
          </button>
        </div>
      )}
    </For>
  </div>
);
