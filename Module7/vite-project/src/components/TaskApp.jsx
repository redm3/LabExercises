import { useContext } from 'react';
import { useReducer } from 'react';
import { UserContext } from '../context/UserContext.jsx';
import AddTask from './AddTask.jsx';
import TaskList from './TaskList.jsx';

// see https://react.dev/learn/extracting-state-logic-into-a-reducer

export default function TaskApp() {

  const [tasks, dispatch] = useReducer(tasksReducer, initialTasks); //replaces state when multiple actions all modify the list of tasks
  let nextId = tasks[tasks.length - 1].id + 1
  const {username} = useContext(UserContext)
  let personalisation = username ? ' for ' + username : '';

  function handleAddTask(text) {
    dispatch({
      type: 'added',
      id: nextId,
      text: text,
    });
  }

  function handleChangeTask(task) {
    dispatch({
      type: 'changed',
      task: task,
    });
  }

  function handleDeleteTask(taskId) {
    dispatch({
      type: 'deleted',
      id: taskId,
    });
  }

  return (
    <div className="TaskApp componentBox">
      <h1>Prague itinerary{personalisation}</h1>
      <AddTask onAddTask={handleAddTask} />
      <TaskList
        tasks={tasks}
        onChangeTask={handleChangeTask}
        onDeleteTask={handleDeleteTask}
      />
    </div>
  );
}

//handles all state updates in the one function, depending on the action type
function tasksReducer(tasks, action) {
  console.log(action)

  switch (action.type) {
    case 'added': {
      //to add a new task, we create a new array from cloning the existing tasks and adding the data for the new one
      console.log('adding new task: '+action.text)
      return [
        ...tasks,
        {
          id: action.id,
          text: action.text,
          done: false,
        },
      ];
    }
    case 'changed': {
      //to modify a task, we use map to return a new array containing the new data in place of the old one
      console.log('changed task #'+action.task.id+': '+action.task.text)
      return tasks.map((t) => {
        return (t.id === action.task.id) ? action.task : t
      });
    }
    case 'deleted': {
      //to delete a task, we filter out the task with a matching id from the list
      console.log('deleted task #'+action.id)

      return tasks.filter((t) => t.id !== action.id);
    }
    default: {
      throw Error('Unknown action: ' + action.type);
    }
  }
}

const initialTasks = [
  { id: 0, text: 'Visit Kafka Museum', done: true },
  { id: 1, text: 'Watch a puppet show', done: false },
  { id: 2, text: 'Lennon Wall pic', done: false },
];