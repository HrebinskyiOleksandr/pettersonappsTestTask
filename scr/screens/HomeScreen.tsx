import React from 'react';
import { FlatList, Text, StyleSheet } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { PrimaryWrapper } from '../components/PrimaryWrapper';
import { RouteKey } from '../core/typing/enums/navigator';
import { PrimaryButton } from '../components/PrimaryButton';
import { useSelector } from 'react-redux';
import { TaskItem } from '../components/TaskItem';

export const HomeScreen: React.FC = () => {
  const navigation: any = useNavigation();
  const tasks = useSelector((state: any) => state.tasks.tasks);

  return (
    <PrimaryWrapper>
      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <TaskItem task={item} />}
        ListHeaderComponent={<Text style={styles.header}>My Todo List</Text>}
        ListFooterComponent={
          <PrimaryButton
            label="Add New Task"
            onPress={() => navigation.navigate(RouteKey.AddTaskScreen)}
            height={56}
          />
        }
      />
    </PrimaryWrapper>
  );
};

const styles = StyleSheet.create({
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
});
