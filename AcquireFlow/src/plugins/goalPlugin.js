// src/plugins/goalPlugin.js

import { useSelector, useDispatch } from "react-redux";
import { addGoal, deleteGoal, updateGoal } from "../redux/actions";
import { suggestGoals } from "../openai/OpenAiUtility";

export default {
  screenName: "Goals",
  screenData: {
    title: "Goals",
    description: "Manage your goals and track your progress.",
  },
  additionalComponents: {
    // Add custom components for the goals screen here, if needed
  },
  useOpenAi: () => {
    // Define how the plugin interacts with OpenAI
    const getGoalSuggestions = async (userInput) => {
      const suggestedGoals = await suggestGoals(userInput);
      return suggestedGoals;
    };

    return { getGoalSuggestions };
  },
  useRedux: () => {
    // Define how the plugin interacts with Redux
    const goals = useSelector((state) => state.goals.items);
    const dispatch = useDispatch();

    const onAddGoal = (goal) => {
      dispatch(addGoal(goal));
    };

    const onDeleteGoal = (index) => {
      dispatch(deleteGoal(index));
    };

    const onUpdateGoal = (index, goal) => {
      dispatch(updateGoal(index, goal));
    };

    return { goals, onAddGoal, onDeleteGoal, onUpdateGoal };
  },
};