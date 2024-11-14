import { create } from "zustand";
import { StateTask } from "./interfaces/task.interface";

const useTaskStore = create<StateTask>((set) => ({
  tasks: [],
  setTasks: (tasks) => set(() => ({ tasks })),
  addTask: (task) =>
    set((state) => ({
      tasks: [...state.tasks, { ...task, completed: false }],
    })),
  toggleTask: (id) =>
    set((state) => ({
      tasks: state.tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      ),
    })),
}));

export default useTaskStore;
