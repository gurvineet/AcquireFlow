import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import withGenericScreen from '../components/withGenericScreen';
import taskPlugin from '../plugins/taskPlugin';
import { colors, spacing } from '../theme';

const TaskScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const { getSuggestedTasks } = taskPlugin.useOpenAi(dispatch);
  const [newTask, setNewTask] = useState('');
  const tasks = useSelector((state) => state.tasks);
  const selectedGoal = useSelector((state) => state.selectedGoal);

  const handleAddTask = () => {
    if (newTask.trim().length > 0) {
      taskPlugin.useRedux(dispatch).onAddTask({ goalId: selectedGoal.id, task: newTask.trim() });
      setNewTask('');
    }
  };

  return (
    <View style={taskPlugin.styles.container}>
      <View style={taskPlugin.styles.header}>
        <Text style={taskPlugin.styles.title}>{selectedGoal.title}</Text>
        <TouchableOpacity onPress={getSuggestedTasks} style={taskPlugin.styles.iconButton}>
          <MaterialCommunityIcons name="lightbulb-on-outline" size={25} color={colors.white} />
        </TouchableOpacity>
      </View>
      <View style={taskPlugin.styles.taskListContainer}>
        {tasks
          .filter((task) => task.goalId === selectedGoal.id)
          .map((task, index) => (
            <View style={taskPlugin.styles.taskListItem} key={index}>
              <MaterialCommunityIcons
                name="checkbox-blank-circle-outline"
                size={20}
                color={colors.darkGray}
              />
              <Text style={taskPlugin.styles.taskListItemText}>{task.task}</Text>
            </View>
          ))}
      </View>
      <View style={taskPlugin.styles.inputContainer}>
        <TouchableOpacity onPress={handleAddTask} style={taskPlugin.styles.iconButton}>
          <MaterialCommunityIcons name="plus" size={25} color={colors.white} />
        </TouchableOpacity>
        <TextInput
          value={newTask}
          onChangeText={setNewTask}
          placeholder="Enter a new task"
          style={taskPlugin.styles.input}
        />
      </View>
    </View>
  );
};

export default withGenericScreen(
  TaskScreen,
  taskPlugin.screenData,
  taskPlugin.additionalComponents,
  taskPlugin.useOpenAi,
  taskPlugin.useRedux
);