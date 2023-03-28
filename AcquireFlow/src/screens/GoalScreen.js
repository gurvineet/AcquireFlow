import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import withGenericScreen from '../components/withGenericScreen';
import goalPlugin from '../plugins/goalPlugin';
import { useNavigation } from '@react-navigation/native';
import GoalList from '../components/GoalList';

const GoalScreen = (props) => {
  const navigation = useNavigation();
  const { getSuggestedGoals } = goalPlugin.useOpenAi();
  const [newGoal, setNewGoal] = useState('');

  const handleAddGoal = () => {
    if (newGoal.trim().length > 0) {
      props.onAddGoal(newGoal.trim());
      setNewGoal('');
    }
  };

  return (
    <View>
      <Text>Goal Screen Content</Text>
      <GoalList goals={props.goals} navigation={props.navigation} />
      <TextInput
        value={newGoal}
        onChangeText={setNewGoal}
        placeholder="Enter a new goal"
        style={goalPlugin.styles.input}
      />
      <TouchableOpacity onPress={handleAddGoal} style={goalPlugin.styles.button}>
        <Text style={goalPlugin.styles.buttonText}>Add Goal</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={getSuggestedGoals} style={goalPlugin.styles.button}>
        <Text style={goalPlugin.styles.buttonText}>Suggest Goals</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('TaskScreen')}
        style={goalPlugin.styles.button}
      >
        <Text style={goalPlugin.styles.buttonText}>Go to Tasks</Text>
      </TouchableOpacity>
    </View>
  );
};

export default withGenericScreen(
  GoalScreen,
  goalPlugin.screenData,
  goalPlugin.additionalComponents,
  goalPlugin.useOpenAi,
  goalPlugin.useRedux
);