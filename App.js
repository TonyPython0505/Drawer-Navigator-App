import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons';

import WelcomeScreen from './screens/WelcomeScreen';
import UserScreen from './screens/UserScreen';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator screenOptions={{headerStyle: {backgroundColor: 'purple'}, headerTintColor: 'white', drawerActiveBackgroundColor: 'black', drawerActiveTintColor: 'white', drawerStyle: {backgroundColor: 'grey'}}}>
        <Drawer.Screen name="Welcome" component={WelcomeScreen} options={{drawerLabel: 'Greetings', drawerIcon: ({color, size}) => {return (<Ionicons name="home" color={color} size={size} />);}}}/>
        <Drawer.Screen name="User" component={UserScreen} options={{drawerIcon: ({color, size}) => {return (<Ionicons name="person" color={color} size={size} />);}}}/>
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
