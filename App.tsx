import { createDrawerNavigator } from '@react-navigation/drawer';
import { HomeScreen } from './src/HomeScreen';
import { ListScreen } from './src/ListScreen';
import { NavigationContainer } from '@react-navigation/native';

const Drawer = createDrawerNavigator();

export const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="List" component={ListScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}