import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('mydb.db');
db.transaction(tx => {
    tx.executeSql('SELECT * FROM items', [], (_, { rows }) => {
      console.log('Query result:', rows);
    });
  });
  

export const HomeScreen = () => {
    const [text, onChangeText] = useState<string>();
  return (
    <View style={styles.container}>
      <Text>Hello World</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
      />
      <Button
        title={"button"}
        onPress={() => console.log('Button pushed')}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 40,
    width: '90%',
    borderColor: 'black',
    borderWidth: 1,
  }
});
