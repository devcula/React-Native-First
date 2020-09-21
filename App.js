/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

// In App.js in a new project

import * as React from 'react';
import {View, Text, Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

function HomeScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
      <Button title="Go to details page" onPress={() => navigation.navigate('Details')} />
    </View>
  );
}

function DetailsScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Details Screen</Text>
      <Button title="Go to home page" onPress={() => navigation.navigate('Home')} />
      <Button title="Go to details page again.." onPress={() => navigation.push('Details')} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
      <Button title="Go to first page" onPress={() => navigation.popToTop()} />
    </View>
  );
}

const Stack = createStackNavigator();

function App() {
  const navHeaderStyles = {
    headerStyle: {
      backgroundColor: '#000000',
    },
    headerTintColor: '#FFFFFF',
    headerTitleStyle: {
      fontWeight: 'bold',
      fontStyle: 'italic',
    },
  };

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={navHeaderStyles}>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: 'Home Page',
          }}
        />
        <Stack.Screen
          name="Details"
          component={DetailsScreen}
          options={{
            title: 'Details Screen',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
