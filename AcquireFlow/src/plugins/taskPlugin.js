// src/plugins/taskPlugin.js

import { useSelector, useDispatch } from "react-redux";
import { addTask, deleteTask, updateTask } from "../redux/actions";
import { suggestTasksForGoal } from "../openai/OpenAiUtility";

export default {
  screenName: "Tasks",
  screenData: {
    title: "Tasks",
    description: "Manage your tasks and stay organized.",
  },
  additionalComponents: {
    // Add custom components for the tasks screen here, if needed
  },
  useOpenAi: () => {
    // Define how the plugin interacts with OpenAI
    const getTaskSuggestions = async (goal) => {
      const suggestedTasks = await suggestTasksForGoal(goal);
      return suggestedTasks;
    };

    return { getTaskSuggestions };
  },
  useRedux: () => {
    // Define how the plugin interacts with Redux
    const tasks = useSelector((state) => state.tasks.items);
    const dispatch = useDispatch();

    const onAddTask = (task) => {
      dispatch(addTask(task));
    };

    const onDeleteTask = (index) => {
      dispatch(deleteTask(index));
    };

    const onUpdateTask = (index, task) => {
      dispatch(updateTask(index, task));
    };

    return { tasks, onAddTask, onDeleteTask, onUpdateTask };
  },
};
