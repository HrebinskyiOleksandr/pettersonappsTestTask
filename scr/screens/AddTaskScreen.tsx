import React from 'react';
import { View, Text, Button } from 'react-native';
import {useNavigation} from "@react-navigation/native";
import { PrimaryWrapper } from '../components/PrimaryWrapper';

export const AddTaskScreen: React.FC = () => {
    const navigation: any = useNavigation()

  return (
    <PrimaryWrapper>
      <Text>Add New Task</Text>
      <Button
        title="Save Task"
        onPress={() => navigation.goBack()}
      />
    </PrimaryWrapper>
  );
};

