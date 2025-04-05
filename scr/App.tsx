import React from 'react';
import { Text, View } from 'react-native';
import {NavigationContainer} from "@react-navigation/native";
import { AppNavigator } from './navigation/AppNavigator';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { PaperProvider } from 'react-native-paper';

function App(): React.JSX.Element {
  return (
      <Provider store={store}>
        <PaperProvider>
          <NavigationContainer>
            <AppNavigator/>
          </NavigationContainer>  
        </PaperProvider>
      </Provider>
  );
}

export default App;
