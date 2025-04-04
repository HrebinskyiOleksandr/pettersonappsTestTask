import React from 'react';
import { View, Text, Button } from 'react-native';
import {useNavigation} from "@react-navigation/native";
import { PrimaryWrapper } from '../components/PrimaryWrapper';
import { RouteKey } from '../core/typing/enums/navigator';

export const HomeScreen: React.FC = () => {
    const navigation: any = useNavigation()

  return (
    <PrimaryWrapper>
      <Text>My Todo List</Text>
      <Text>My Todo List</Text>
      <Text>My Todo List</Text>
      <Text>My Todo List</Text>
      <Text>My Todo List</Text>
      <Button
        title="Add New Task"
        onPress={() => navigation.navigate(RouteKey.AddTaskScreen)}
      />
    </PrimaryWrapper>
  );
};


