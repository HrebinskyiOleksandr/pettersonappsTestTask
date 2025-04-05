import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors } from '../core/typing/enums/colors';
import {Checkbox, IconButton} from 'react-native-paper';

const getCategoryColor = (category: string) => {
  switch (category) {
    case 'file-document':
      return colors.categoryWork;
    case 'calendar':
      return colors.categoryLife;
    case 'trophy':
      return colors.categoryChalenge;
    default:
      return 'lightgray';
  }
};

interface TaskCardProps {
  task: {
    id: string;
    title: string;
    category: string;
    completed: boolean;
    time?: string;
  };
  onToggle: () => void;
}

export const TaskCard: React.FC<TaskCardProps> = ({ task, onToggle }) => {
  const iconName = task.category || 'file-document';
  const iconColor = getCategoryColor(task.category);

  return (
    <View style={[styles.card, task.completed && styles.completedCard]}>
      <View style={[styles.iconContainer &&  {backgroundColor:iconColor, borderRadius: 25, marginRight: 12,}]}>
        <IconButton icon={iconName} size={20} iconColor={'rgba(0, 0, 0, 0.21)'}/>
      </View>

      <View style={styles.textContainer}>
        <Text style={[styles.title, task.completed && styles.completedText]}>
          {task.title}
        </Text>
        {task.time && (
          <Text style={[styles.time, task.completed && styles.completedText]}>
            {task.time}
          </Text>
        )}
      </View>
      <View style={styles.checkbox}>
        {/*чек бокси вийшли не дуже гарні але це через особливості react native paper*/}
        <Checkbox
          status={task.completed ? 'checked' : 'unchecked'}
          onPress={onToggle}
          color={'#4A3780'}
          uncheckedColor={'#4A3780'}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  checkbox: {
    borderWidth: 1,
    borderRadius: 3,
  },
  card: {
    height: 80,
    flexDirection: 'row',
    backgroundColor: 'white',
    paddingHorizontal: 16,
    paddingVertical: 10,
    alignItems: 'center',
  },
  completedCard: {
    backgroundColor: '#f6f6f6',
  },
  iconContainer: {
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
    margin: 5,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    color: '#333',
  },
  time: {
    fontSize: 14,
    color: '#888',
    marginTop: 2,
  },
  completedText: {
    color: '#c4c4c4',
    textDecorationLine: 'line-through',
  },
});
