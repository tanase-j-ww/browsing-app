import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View, Linking } from 'react-native';
import { enablePromise, openDatabase } from 'react-native-sqlite-storage';
import axios from 'axios';

// enablePromise(true);

// const db = openDatabase({name: 'my.db', location: 'default'});

export const HomeScreen = () => {
    const [text, onChangeText] = useState<string>('');
    const sendMessageToSlack = async() => {
      const webhookUrl: string = 'https://hooks.slack.com/services/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'
      try {
        const response = await axios.post(webhookUrl,{
            text: text
          });
        console.log('message sent', response.data);
      }
      catch(e) {
        console.error('error', e);
      }
    };
  return (
    <View style={styles.container}>
      <Text>Hello World</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
      />
      <Text>{text}</Text>
      <Button
        title={"button"}
        onPress={sendMessageToSlack}
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
