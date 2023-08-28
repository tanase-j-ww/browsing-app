import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View, Linking } from 'react-native';
import { enablePromise, openDatabase } from 'react-native-sqlite-storage';

enablePromise(true);

openDatabase({name: 'my.db', location: 'default'}, successcb, errorcb);

export const HomeScreen = () => {
    const [text, onChangeText] = useState<string>('');
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
      <OpenURLButton
        url={`https://slack.com/app_redirect?app=${appId}`}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const appId = "A123456789";

const OpenURLButton = ({url}: {url: string}) => {
  const onpress = () => {
    Linking.openURL(url)
  }
  return(<Button title='poti' onPress={onpress}/>)
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
