// src/plugins/goalPlugin.js

import { useSelector, useDispatch } from "react-redux";
import { addGoal, deleteGoal, updateGoal } from "../redux/reducers/goals";
import { suggestGoals } from "../openai/OpenAiUtility";
import { StyleSheet } from 'react-native';

export default {
  screenName: "Goals",
  screenData: {
    title: "Goals",
    description: "Manage your goals and track your progress.",
  },
  additionalComponents: {},
  useOpenAi: () => {
    const goals = useSelector((state) => state.goals.items);
    const dispatch = useDispatch();

    const getSuggestedGoals = async () => {
      try {
        const suggestions = await suggestGoals(goals);
        suggestions.forEach((suggestion) => {
          dispatch(addGoal(suggestion));
        });
      } catch (error) {
        console.error('Error getting goal suggestions:', error);
      }
    };

    return { getSuggestedGoals };
  },
  useRedux: () => {
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