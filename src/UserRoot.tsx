import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { UserScreen } from "./user/UserScreen";
import { UserAddScreen } from "./user/UserAddScreen";
import { UserEditScreen } from "./user/UserEditScreen";

const Stack = createNativeStackNavigator();

export default function UserRoot() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="User" component={UserScreen} />
      <Stack.Screen name="UserAdd" component={UserAddScreen} />
      <Stack.Screen name="UserEdit" component={UserEditScreen} />
    </Stack.Navigator>
  );
}