import { StatusBar } from 'expo-status-bar';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import Settings from './screens/Settings';
import Login from './screens/Login';
import MainMenu from './screens/MainMenu'
import Temperature from './screens/Temperature'
import Movements from './screens/Movements';
import Gas from './screens/Gas';
import Task from './components/Task';

export default function App() {

  const Stack = createNativeStackNavigator();
  return (
  <>
<StatusBar style="light"/>
<NavigationContainer>
        <Stack.Navigator
          screenOptions={{ headerShown: false }}
          initialRouteName="MainMenu" >
          <Stack.Screen name="MainMenu" component={MainMenu} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Settings" component={Settings} />
          <Stack.Screen name="Temperature" component={Temperature} />
          <Stack.Screen name="Movements" component={Movements} />
          <Stack.Screen name="Gas" component={Gas} />
        </Stack.Navigator>
      </NavigationContainer>
  </>

  );
}

