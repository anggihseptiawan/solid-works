import { createSignal } from "solid-js";

interface InputTodoProps {
  handleAddTodo: (data: string) => void;
}

export const InputTodo = ({ handleAddTodo }: InputTodoProps) => {
  const [input, setInput] = createSignal("");

  return (
    <div style={{ "margin-bottom": "20px" }}>
      <input
        type="text"
        class="p-1 mr-2 border-2 border-gray-200 rounded-sm"
        onChange={(e) => setInput((e.target as HTMLInputElement).value)}
      />
      <button
        class="bg-teal-500 py-1.5 px-5 rounded-sm text-white font-semibold"
        onClick={() => handleAddTodo(input())}
      >
        Add todo
      </button>
    </div>
  );
};
