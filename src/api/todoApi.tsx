import { TaskResponse } from "../interfaces/task.interface";

const url = "https://jsonplaceholder.typicode.com/todos";
const responseFail: TaskResponse = {
  completed: false,
  id: 0,
  title: "",
  userId: 0,
};

export const getTodos = async (): Promise<TaskResponse[]> => {
  const resp = await fetch(url);
  const todosResponse: TaskResponse[] = await resp.json();
  return todosResponse || [];
};

export const postTodo = async (title: string): Promise<TaskResponse> => {
  const body = JSON.stringify({
    title,
    complete: false,
    userId: 1,
  });
  const resp = await fetch(url, {
    method: "POST",
    body,
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });

  if (!resp.ok) return responseFail;
  const postResponse: TaskResponse = await resp.json();
  return postResponse;
};
