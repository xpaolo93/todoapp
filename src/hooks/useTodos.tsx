import { useEffect, useState } from "react";
import useTaskStore from "../store";
import { getTodos, postTodo } from "../api/todoApi";

export const useTodos = (title: string = "") => {
  const [task, setTask] = useState(title);
  const [loading, setLoading] = useState(false);
  const addTask = useTaskStore((state) => state.addTask);
  const setTasks = useTaskStore((state) => state.setTasks);

  const getTodoFunction = async () => {
    const responseTodos = await getTodos();
    if (responseTodos) setTasks(responseTodos);
  };

  const handleAddTask = async () => {
    setLoading(true);
    const responsePost = await postTodo(task.trim());
    if (responsePost.id > 0) {
      addTask(responsePost);
      setTask("");
    }
    setLoading(false);
  };

  useEffect(() => {
    getTodoFunction();
  }, []);

  return {
    task,
    setTask,
    loading,
    handleAddTask,
  };
};
