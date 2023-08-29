import * as SQLite from 'expo-sqlite';
import * as FileSystem from 'expo-file-system';
import { Asset } from 'expo-asset/build/Asset';
import { Text, View, Button } from 'react-native';

// async function openDatabase(pathToDatabaseFile: string): Promise<SQLite.WebSQLDatabase> {
//   if (!(await FileSystem.getInfoAsync(FileSystem.documentDirectory + 'SQLite')).exists) {
//     await FileSystem.makeDirectoryAsync(FileSystem.documentDirectory + 'SQLite');
//   }
//   await FileSystem.downloadAsync(
//     Asset.fromModule(require(pathToDatabaseFile)).uri,
//     FileSystem.documentDirectory + 'SQLite/sample.db'
//   );
//   return SQLite.openDatabase('sample.db');
// }

const Sqlitetest = ({navigation}) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>sqlite Screen</Text>
      <Button title='to add' onPress={() => navigation.navigate('TaskAdd') } />
      <Button title='to edit' onPress={() => navigation.navigate('TaskEdit') } />
    </View>
  );
}

export default Sqlitetest;