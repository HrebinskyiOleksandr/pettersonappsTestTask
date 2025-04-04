import React from 'react';
import { View, Text, Button } from 'react-native';
import {useNavigation} from "@react-navigation/native";
import { PrimaryWrapper } from '../components/PrimaryWrapper';
import { PrimaryButton } from '../components/PrimaryButton';

export const AddTaskScreen: React.FC = () => {
    const navigation: any = useNavigation()

  return (
    <PrimaryWrapper>
      <Text>Add New Task</Text>
      <PrimaryButton label='asd' onPress={() => {console.log('asdasd')}} height={56} />
    </PrimaryWrapper>
  );
};

