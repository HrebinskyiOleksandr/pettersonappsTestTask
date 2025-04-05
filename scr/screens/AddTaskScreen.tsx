import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { addTaskSchema } from '../core/validation/addTaskSchema';
import { yupResolver } from '@hookform/resolvers/yup';
import { useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { Text, IconButton } from 'react-native-paper';
import { addTask } from '../redux/tasksSlice';
import { RouteKey } from '../core/typing/enums/navigator';
import { PrimaryWrapper } from '../components/PrimaryWrapper';
import { PrimaryButton } from '../components/PrimaryButton';
import { PrimaryInput } from '../components/PrimaryInput';
import { colors } from '../core/typing/enums/colors';
import { MaskInputField } from '../components/MaskInputField';

export const AddTaskScreen: React.FC = () => {
  const dispatch = useDispatch();
  const navigation: any = useNavigation();
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [isTimePickerVisible, setTimePickerVisibility] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const { control, handleSubmit, setValue, formState: { errors } } = useForm({
    resolver: yupResolver(addTaskSchema),
  });

  const onSubmit = (data: any) => {
    const newTask = {
      id: `${Date.now()}-${Math.floor(Math.random() * 10000)}`,
      ...data,
      completed: false,
    };
    dispatch(addTask(newTask));
    navigation.navigate(RouteKey.HomeScreen);
  };
  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'file-document':
        return colors.categoryWork;
      case 'calendar':
        return colors.categoryLife;
      case 'trophy':
        return colors.categoryChalenge;
      default:
        return 'lightgray'; // стандартний колір для не вибраної категорії
    }
  };
  return (
    <PrimaryWrapper>
      <View style={styles.header}>
        <IconButton icon="close" size={24} onPress={() => navigation.goBack()} />
        <Text style={styles.headerTitle}>Add New Task</Text>
      </View>

      <Controller
        control={control}
        name="title"
        render={({ field: { onChange, value } }) => (
          <PrimaryInput
            label="Task Title"
            value={value}
            onChangeText={onChange}
            error={!!errors.title}
            errorMessage={errors.title?.message}
          />
        )}
      />
      <View style={styles.categoryContainer}>
        <Text style={styles.label}>Category</Text>
        <View style={styles.categorys}>
      {['file-document', 'calendar', 'trophy'].map((cat) => (
        <Controller
          key={cat}
          control={control}
          name="category"
          render={({ field: { onChange, value } }) => (
            <IconButton
              icon={cat}
              size={18}
              onPress={() => {
                setSelectedCategory(cat);
                onChange(cat);
              }}
              style={[
                styles.categoryIcon,
                value === cat && { borderColor: colors.main, borderWidth: 2 },
                { backgroundColor: getCategoryColor(cat) },
              ]}
              iconColor={'rgba(0, 0, 0, 0.21)'}
              mode="contained"  
              rippleColor="transparent"  
            />
          )}
        />
      ))}
    </View>
      </View>

      <View style={styles.row}>
        <View style={styles.column}>
          <Controller
            control={control}
            name="date"
            render={({ field: { value } }) => (
              <MaskInputField
                label="Date"
                value={value}
                onChangeText={(text) => setValue('date', text)}
                mask={[/\d/, /\d/, '.', /\d/, /\d/, '.', /\d/, /\d/, /\d/, /\d/]}  // Маска для дати
                icon="calendar"  // Іконка для кнопки (наприклад, календар)
                error={!!errors.date}
                errorMessage={errors.date?.message}
              />
            )}
          />
        </View>
        <View style={styles.column}>
          <Controller
            control={control}
            name="time"
            render={({ field: { value } }) => (
            <MaskInputField
              label="Time"
              value={value}
              onChangeText={(text) => setValue('time', text)}
              mask={[/\d/, /\d/, ':', /\d/, /\d/]}  // Маска для часу
              icon="clock"  // Іконка для кнопки (наприклад, годинник)
              error={!!errors.time}
              errorMessage={errors.time?.message}
            />
            )}
          />
        </View>
      </View>

      <Controller
        control={control}
        name="notes"
        render={({ field: { onChange, value } }) => (
          <PrimaryInput
            label="Notes"
            value={value}
            onChangeText={onChange}
            multiline
            style={{height: 130}}
          />
        )}
      />

      <PrimaryButton label="Save" onPress={handleSubmit(onSubmit)} height={56} style={styles.primaryButton}/>
    </PrimaryWrapper>
  );
};

const styles = StyleSheet.create({
  categorys: {
    flexDirection: 'row',
    marginHorizontal: 20,
  },
  categoryIcon: {
    width: 50,  
    height: 50, 
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,  
    margin: 5,
    borderColor: colors.white,
    borderWidth: 2,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    flex: 1,
    textAlign: 'center',
  },
  label: {
    fontSize: 14,
    color: colors.black,
    fontWeight: '600',
  },
  categoryContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  selectedCategory: {
    backgroundColor: 'lightgray',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  column: {
    flex: 1,
    marginRight: 10,
  },
  primaryButton: {
    position: 'absolute',
    bottom: 15,
  },
});
