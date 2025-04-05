import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';
import { toggleTaskCompletion } from '../redux/tasksSlice';

interface TaskProps {
  task: {
    id: string;
    title: string;
    category: string;
    time?: string;
    completed: boolean;
  };
}

export const TaskItem: React.FC<TaskProps> = ({ task }) => {
  const dispatch = useDispatch();
  const handleToggleCompletion = () => {
    dispatch(toggleTaskCompletion(task.id));
  };

  return (
    <TouchableOpacity onPress={handleToggleCompletion} style={styles.taskItem}>
      <View style={styles.iconContainer}>
        {task.category === 'study' && <Text>📚</Text>}
        {task.category === 'run' && <Text>🏃</Text>}
        {task.category === 'party' && <Text>🎉</Text>}
        {task.category === 'other' && <Text>🗒️</Text>}
      </View>
      <Text style={[styles.taskTitle, task.completed && styles.completedTask]}>
        {task.title} {task.time && `at ${task.time}`}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  taskItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  iconContainer: {
    marginRight: 16,
  },
  taskTitle: {
    fontSize: 18,
  },
  completedTask: {
    textDecorationLine: 'line-through',
    color: '#aaa',
  },
});
