export interface TaskResponse {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export interface StateTask {
  tasks: TaskResponse[];
  setTasks: (tasks: TaskResponse[]) => void;
  addTask: (tasks: TaskResponse) => void;
  toggleTask: (id: number) => void;
}
