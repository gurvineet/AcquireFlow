// src/plugins/taskPlugin.js

import { useSelector, useDispatch } from "react-redux";
import { addTask, deleteTask, updateTask } from "../redux/reducers/tasks";
import { suggestTasks } from "../openai/OpenAiUtility";
import { StyleSheet } from 'react-native';

export default {
  screenName: "Tasks",
  screenData: {
    title: "Tasks",
    description: "Manage your tasks and track your progress.",
  },
  additionalComponents: {
    // Add custom components for the tasks screen here, if needed
  },
  useOpenAi: () => {
    const tasks = useSelector((state) => state.tasks.items);
    const dispatch = useDispatch();

    const getSuggestedTasks = async (goal) => {
      try {
        const suggestions = await suggestTasks(goal, tasks);
        suggestions.forEach((suggestion) => {
          dispatch(addTask({ goal, task: suggestion }));
        });
      } catch (error) {
        console.error('Error getting task suggestions:', error);
      }
    };

    return { getSuggestedTasks };
  },
  useRedux: () => {
    const tasks = useSelector((state) => state.tasks.items);
    const dispatch = useDispatch();

    const onAddTask = (taskData) => {
      dispatch(addTask(taskData));
    };

    const onDeleteTask = (taskId) => {
      dispatch(deleteTask(taskId));
    };

    const onUpdateTask = (taskId, taskData) => {
      dispatch(updateTask(taskId, taskData));
    };

    return { tasks, onAddTask, onDeleteTask, onUpdateTask };
  },
  styles: StyleSheet.create({
    input: {
      borderWidth: 1,
      borderColor: '#000',
      borderRadius: 4,
      padding: 8,
      marginBottom: 8,
    },
    button: {
      backgroundColor: '#1E90FF',
      padding: 8,
      borderRadius: 4,
      marginBottom: 8,
    },
    buttonText: {
      color: '#FFF',
      textAlign: 'center',
    },
  }),
};