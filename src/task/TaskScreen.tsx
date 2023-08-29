import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

export const TaskScreen = ({navigation}) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>task Screen</Text>
      <Button title='to add' onPress={() => navigation.navigate('TaskAdd') } />
      <Button title='to edit' onPress={() => navigation.navigate('TaskEdit') } />
    </View>
  );
}