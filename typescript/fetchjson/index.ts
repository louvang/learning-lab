import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com/todos/1';

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

axios.get(url).then((res) => {
  const todo = res.data as Todo;

  // const id = todo.id;
  // const title = todo.title;
  // const completed = todo.completed;

  const { id, title, completed } = todo;

  logTodo(id, title, completed);
});

const logTodo = (id: number, title: string, completed: boolean) => {
  let completedText = `-[ ]`;
  if (completed) {
    completedText = `-[x]`;
  }

  console.log(`${completedText} ${title} (${id})`);
};
