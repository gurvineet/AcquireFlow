import { useSelector, useDispatch } from 'react-redux';
import { addGoal, deleteGoal, updateGoal } from '../redux/reducers/goals';
import { suggestGoals } from '../openai/OpenAiUtility';
import { colors } from '../theme';

const useOpenAi = (dispatch) => {
  const getSuggestedGoalsWrapper = async () => {
    try {
      const goals = useSelector((state) => state.goals);
      const suggestions = await suggestGoals(goals);
      print(suggestions);
      const suggestedGoal = goals;
      dispatch(addGoal([...goals, { title: suggestedGoal, completed: false }]));
    } catch (err) {
      console.log(err);
    }
  };
  return { getSuggestedGoalsWrapper };
};

const useRedux = (dispatch) => {
  const goals = useSelector((state) => state.goals);
  const onAddGoal = (newGoal) => {
    dispatch(addGoal([...goals, { title: newGoal, completed: false }]));
  };
  return { goals, onAddGoal };
};

const screenData = {
  title: 'Goals',
  toolbarButtons: [
    {
      name: 'Suggest Goals',
      action: 'getSuggestedGoalsWrapper',
      icon: 'lightbulb-on-outline',
      color: colors.white,
    },
  ],
};

const additionalComponents = {
  // Add custom components for the goal screen here, if needed
};

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
  },
  header: {
    backgroundColor: '#007aff',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 60,
    paddingHorizontal: 16,
  },
  title: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  iconButton: {
    padding: 8,
  },
  inputContainer: {
    flexDirection: 'row',
    backgroundColor: 'white',
    alignItems: 'center',
    paddingHorizontal: 16,
    height: 60,
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
  },
  input: {
    flex: 1,
    fontSize: 16,
    paddingHorizontal: 8,
    height: 40,
  },
};

export default {
  useOpenAi,
  useRedux,
  screenData,
  additionalComponents,
  styles,
};