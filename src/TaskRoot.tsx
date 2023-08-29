import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TaskScreen } from './task/TaskScreen';
import { TaskAddScreen } from './task/TaskAddScreen';
import { TaskEditScreen } from './task/TaskEditScreen';

const Stack = createNativeStackNavigator();

export default function TaskRoot() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Task" component={TaskScreen} />
      <Stack.Screen name="TaskAdd" component={TaskAddScreen} />
      <Stack.Screen name="TaskEdit" component={TaskEditScreen} />
    </Stack.Navigator>
  );
}