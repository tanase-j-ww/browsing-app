import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, FlatList } from "react-native";

export const ListScreen = () => {
  const renderItem = ({ item, index }: { item: demodataItem; index: number }) => (
    <View>
      <Text>{item.index}</Text>
      <Text>{item.text}</Text>
      <Text>{index}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text>List Here</Text>
      <FlatList
        data={demodata}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
      <Item items={demodata} />
      <StatusBar style="auto" />
    </View>
  );
};

const Item = ({ items }: { items: demodataItem[] }) =>
  items.map((i: demodataItem) => (
    <View style={{flex: 1}} key={i.id}>
      <Text style={{textAlign: "left"}}>{i.id}</Text>
      <Text style={{textAlign: "left"}}>{i.index}</Text>
      <Text style={{textAlign: "right"}}>{i.text}</Text>
    </View>
  ));

type demodataItem = {
  id: number;
  index: number;
  text: string;
};

const demodata: demodataItem[] = [
  {
    id: 1,
    index: 1,
    text: "GoodMorning",
  },
  {
    id: 2,
    index: 3,
    text: "Hello",
  },
  {
    id: 3,
    index: 4,
    text: "GoodEvening",
  },
  {
    id: 4,
    index: 2,
    text: "GoodNight",
  },
  {
    id: 5,
    index: 5,
    text: "Nice",
  },
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
