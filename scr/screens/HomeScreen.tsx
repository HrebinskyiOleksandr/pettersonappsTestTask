import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  FlatList,
  View,
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { PrimaryButton } from '../components/PrimaryButton';
import { RouteKey } from '../core/typing/enums/navigator';
import { useNavigation } from '@react-navigation/native';
import { TaskCard } from '../components/TaskCard';
import { toggleTaskCompletion } from '../redux/tasksSlice';
import { colors } from '../core/typing/enums/colors';

export const HomeScreen: React.FC = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const tasks = useSelector((state: any) => state.tasks.tasks);

  const activeTasks = tasks.filter((task: any) => !task.completed);
  const completedTasks = tasks.filter((task: any) => task.completed);

  return (
    <SafeAreaView style={styles.contentStyle}>
      <Text style={styles.title}>My Todo List</Text>
      {/*В даному випадко можна юзати і FlatList і ScrollView бо список не виликий*/}
      <Text style={styles.sectionTitle}>Active</Text>
      <FlatList
        data={activeTasks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TaskCard
            task={item}
            onToggle={() => dispatch(toggleTaskCompletion(item.id))}
          />
        )}
        style={styles.taskSection}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 20 }}
      />

      <Text style={styles.sectionTitle}>Completed</Text>
      <ScrollView style={styles.taskSection} showsVerticalScrollIndicator={false}>
        {completedTasks.map((task: any) => (
          <TaskCard
            key={task.id}
            task={task}
            onToggle={() => dispatch(toggleTaskCompletion(task.id))}
          />
        ))}
      </ScrollView>

      <PrimaryButton
        label="Add New Task"
        onPress={() => navigation.navigate(RouteKey.AddTaskScreen)}
        height={56}
        style={styles.primaryButton}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  contentStyle: {
    paddingTop: 20,
    flex: 1,
    marginHorizontal: 16,
    backgroundColor: colors.bg_main,
  },
  title: {
    fontSize: 26,
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    marginTop: 20,
    marginBottom: 10,
  },
  taskSection: {
    maxHeight: 240,
  },
  primaryButton: {
    position: 'absolute',
    bottom: 50,
  },
});
