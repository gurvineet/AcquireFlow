import React from 'react';
import { View, Text } from 'react-native';
import { useSelector } from 'react-redux';
import GoalListItem from './GoalListItem';

const GoalList = ({ navigation }) => {
    const goals = useSelector((state) => state.goals.items);
  
    return (
      <View>
        {goals.map((goal, index) => (
          <GoalListItem
            key={index}
            title={goal}
            navigation={navigation}
          />
        ))}
      </View>
    );
  };  

export default GoalList;