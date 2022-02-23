import React from 'react';
import { KeyboardAvoidingView, Platform, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/homeScreen';
import NewTaskTodo from '../screens/NewTodoScreen';


const Stack = createStackNavigator();

const AppContainer = () => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.Os == "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
    >
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            options={{
              headerStyle: {
                backgroundColor: 'black',
                height: 120
              },
              title: <Image style={{
               width: 250,
              }}
              resizeMode='contain'
              source={require('../assests/white_Kønnect_01.png')}/> 
              }}
              name="Home" component={HomeScreen} />
          <Stack.Screen
            options={{
              title: '',
              headerBackTitle: 'back'
            }}
            name="NewTask" component={NewTaskTodo} />
          </Stack.Navigator>
      </NavigationContainer>
    </KeyboardAvoidingView>
    );
};

export default AppContainer;