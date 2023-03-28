import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import GoalList from '../components/GoalList';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import goalPlugin from '../plugins/goalPlugin';
import { colors, spacing } from '../theme';

const GoalScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [newGoal, setNewGoal] = useState('');
  const goals = useSelector((state) => state.goals);

  const { getSuggestedGoals } = goalPlugin.useOpenAi(dispatch).getSuggestedGoalsWrapper;

  const handleAddGoal = () => {
    if (newGoal.trim().length > 0) {
      goalPlugin.useRedux(dispatch).onAddGoal(newGoal.trim());
      setNewGoal('');
    }
  };

  return (
    <View style={goalPlugin.styles.container}>
      <View style={goalPlugin.styles.header}>
        <Text style={goalPlugin.styles.title}>Goals</Text>
        <TouchableOpacity onPress={getSuggestedGoals} style={goalPlugin.styles.iconButton}>
          <MaterialCommunityIcons name="lightbulb-on-outline" size={25} color={colors.white} />
        </TouchableOpacity>
      </View>
      <GoalList goals={goals} navigation={navigation} />
      <View style={goalPlugin.styles.inputContainer}>
        <TouchableOpacity onPress={handleAddGoal} style={goalPlugin.styles.iconButton}>
          <MaterialCommunityIcons name="plus" size={25} color={colors.white} />
        </TouchableOpacity>
        <TextInput
          value={newGoal}
          onChangeText={setNewGoal}
          placeholder="Enter a new goal"
          style={goalPlugin.styles.input}
        />
      </View>
    </View>
  );
};

export default GoalScreen;