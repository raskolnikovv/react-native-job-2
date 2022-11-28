import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import Login from './pages/Login';
import List from './pages/List';
import Home from './pages/Home';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Login" component={Login} />        
          <Stack.Screen name="List" component={List} />        
          <Stack.Screen name="Home" component={Home} />        
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
