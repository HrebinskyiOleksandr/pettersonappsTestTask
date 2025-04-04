import React from 'react';
import { Text, View } from 'react-native';
import {NavigationContainer} from "@react-navigation/native";
import { AppNavigator } from './navigation/AppNavigator';
import { Provider } from 'react-redux';

function App(): React.JSX.Element {
  return (
    <View style={{ flex: 1 }}> 
      <NavigationContainer>
        <AppNavigator/>
      </NavigationContainer>  
    </View>
  );
}

export default App;
