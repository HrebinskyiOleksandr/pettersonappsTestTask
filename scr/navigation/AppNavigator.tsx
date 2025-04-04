import React from 'react';
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {RouteKey} from "../core/typing/enums/navigator.ts";
import { HomeScreen } from "../screens/HomeScreen.tsx";
import { AddTaskScreen } from '../screens/AddTaskScreen.tsx';


const Stack = createNativeStackNavigator();
export const AppNavigator = () => {
  return(
    <Stack.Navigator
      initialRouteName='HomeScreen'
      screenOptions={{headerShown: false}}
    >
      <Stack.Screen name={RouteKey.HomeScreen} component={HomeScreen}/>
      <Stack.Screen name={RouteKey.AddTaskScreen} component={AddTaskScreen}/>
    </Stack.Navigator>
  );
}


// Крок 3: Налаштування Redux
// Створення store.js: Налаштуй Redux Store.
// Створення tasksSlice.js: Визнач дії та редюсери для управління станом завдань.
// Крок 4: Реалізація компонентів
// Створення TaskList.js: Компонент для відображення списку завдань.
// Створення TaskItem.js: Компонент для відображення окремого завдання.
// Створення AddTaskModal.js: Компонент для додавання нового завдання.
// Крок 5: Реалізація функціоналу
// Додавання завдань: Реалізуй можливість додавання нових завдань.
// Видалення завдань: Реалізуй можливість видалення завдань.
// Категоризація завдань: Додай підтримку категорій для завдань.
// Пошук та фільтрація: Реалізуй пошук та фільтрацію завдань за статусом (всі/виконані/невиконані).
// Позначення завдань як виконаних: Додай можливість позначати завдання як виконані.
// Крок 6: Стилізація
// Додай стилі: Використовуй globalStyles.js та colors.js для стилізації компонентів відповідно до дизайну.