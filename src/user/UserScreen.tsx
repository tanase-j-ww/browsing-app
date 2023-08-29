import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

export const UserScreen = ({navigation}) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>user Screen</Text>
      <Button title='to add' onPress={() => navigation.navigate('UserAdd') } />
      <Button title='to edit' onPress={() => navigation.navigate('UserEdit') } />
    </View>
  );
}