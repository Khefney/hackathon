import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import HomePage from './screens/HomePage';
import LoggingPage from './screens/LoggingPage';
import SettingMaximum from './screens/SettingMaximum';
import RecentMoods from './screens/RecentMoods';

const Stack = createStackNavigator();

const store = configureStore({
  reducer: {
    // Your reducers here
  }
});

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="HomePage">
          <Stack.Screen name="HomePage" component={HomePage} />
          <Stack.Screen name="LoggingPage" component={LoggingPage} />
          <Stack.Screen name="SettingMaximum" component={SettingMaximum} />
          <Stack.Screen name="RecentMoods" component={RecentMoods} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
