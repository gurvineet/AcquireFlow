// src/plugins/taskPlugin.js

import { useSelector, useDispatch } from 'react-redux';
import { addTask, deleteTask, updateTask } from '../redux/reducers/tasks';
import { suggestTasks } from '../openai/OpenAiUtility';

const taskPlugin = {
  screenName: 'Task',
  screenData: {
    title: 'Tasks',
    description: 'Complete tasks to achieve your goals...',
  },
  additionalComponents: {
    // Add custom components for the task screen here, if needed
  },
  useOpenAi: (dispatch) => {
    // Define how the plugin interacts with OpenAI
    const suggestNewTask = async (userInput) => {
      const task = await suggestTasks(userInput);
      return task;
    };

    return { suggestNewTask };
  },
  useRedux: (dispatch) => {
    // Define how the plugin interacts with Redux
    const tasks = useSelector((state) => state.tasks);

    const onAddTask = ({ goalId, task }) => {
      dispatch(addTask({ goalId, task }));
    };

    const onDeleteTask = (task) => {
      dispatch(deleteTask(task));
    };

    const onUpdateTask = (task) => {
      dispatch(updateTask(task));
    };

    return { tasks, onAddTask };
  },
  styles: {
    input: {
      borderWidth: 1,
      borderColor: '#ccc',
      padding: 10,
      margin: 10,
      borderRadius: 5,
      fontSize: 18,
      fontFamily: 'Avenir',
      fontWeight: 'bold',
    },
    button: {
      backgroundColor: '#2196F3',
      padding: 10,
      margin: 10,
      borderRadius: 5,
      alignItems: 'center',
    },
    buttonText: {
      color: 'white',
      fontSize: 18,
      fontFamily: 'Avenir',
      fontWeight: 'bold',
    },
    taskContainer: {
      borderWidth: 1,
      borderColor: '#ccc',
      padding: 10,
      margin: 10,
      borderRadius: 5,
      flexDirection: 'row',
      alignItems: 'center',
    },
    taskText: {
      fontSize: 18,
      fontFamily: 'Avenir',
      marginLeft: 10,
    },
    checkIcon: {
      color: '#2196F3',
      fontSize: 24,
    },
    suggestionButton: {
      backgroundColor: '#2196F3',
      padding: 10,
      margin: 10,
      borderRadius: 5,
      alignItems: 'center',
      flexDirection: 'row',
    },
    suggestionButtonText: {
      color: 'white',
      fontSize: 18,
      fontFamily: 'Avenir',
      fontWeight: 'bold',
      marginLeft: 10,
    },
    suggestionIcon: {
      color: 'white',
      fontSize: 24,
    },
  },
};

export default taskPlugin;