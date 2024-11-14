import { TodoList } from "./components/TodoList";
import { useTodos } from "./hooks/useTodos";

function App() {
  const { task, setTask, loading, handleAddTask } = useTodos();

  return (
    <>
      <div className="min-h-screen bg-gray-100 flex flex-col items-center p-4">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">TODO App</h1>
        <div className="flex gap-2 mb-4">
          <input
            type="text"
            className="border rounded px-4 py-2 w-64"
            placeholder="Agregar tarea"
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
          <button
            onClick={handleAddTask}
            disabled={loading}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 disabled:bg-blue-300 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {loading ? "Cargando" : "Agregar"}
          </button>
        </div>
        <TodoList />
      </div>
    </>
  );
}

export default App;
