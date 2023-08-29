import { createDrawerNavigator } from '@react-navigation/drawer';
import { HomeScreen } from './src/HomeScreen';
import { ListScreen } from './src/ListScreen';
import { NavigationContainer } from '@react-navigation/native';
import UserRoot from './src/UserRoot';
import TaskRoot from './src/TaskRoot';
import Sqlitetest from './sqliteTest';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="List" component={ListScreen} />
        <Drawer.Screen name="UserRoot" component={UserRoot} />
        <Drawer.Screen name="TaskRoot" component={TaskRoot} />
        <Drawer.Screen name="Sqlite" component={Sqlitetest} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}