// src/screens/TaskScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import withGenericScreen from '../components/withGenericScreen';
import taskPlugin from '../plugins/taskPlugin';
import { useNavigation } from '@react-navigation/native';

const TaskScreen = (props) => {
  const navigation = useNavigation();
  const [newTask, setNewTask] = useState('');

  const handleAddTask = () => {
    if (newTask.trim().length > 0) {
      props.onAddTask({ goalId: props.goalId, task: newTask.trim() });
      setNewTask('');
    }
  };

  return (
    <View>
      <Text>Task Screen Content</Text>
      <TextInput
        value={newTask}
        onChangeText={setNewTask}
        placeholder="Enter a new task"
        style={taskPlugin.styles.input}
      />
      <TouchableOpacity onPress={handleAddTask} style={taskPlugin.styles.button}>
        <Text style={taskPlugin.styles.buttonText}>Add Task</Text>
      </TouchableOpacity>
      {props.tasks
        .filter((task) => task.goalId === props.goalId)
        .map((task, index) => (
          <Text key={index}>{task.task}</Text>
        ))}
      <TouchableOpacity
        onPress={() => navigation.navigate('GoalScreen')}
        style={taskPlugin.styles.button}
      >
        <Text style={taskPlugin.styles.buttonText}>Go to Goals</Text>
      </TouchableOpacity>
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