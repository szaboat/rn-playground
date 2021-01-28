import React, { useState } from "react";
import { View, Text, FlatList, StyleSheet, SafeAreaView } from "react-native";
import Constants from "expo-constants";
import faker from "faker";
import { useEffect } from "react";
import { debounce } from "debounce";

function* range(start, end) {
  for (let i = start; i <= end; i++) {
    yield i;
  }
}

const getRandomData = (num) => {
  const items = [...range(1, num)];
  return items.map(() => ({
    title: faker.name.firstName(),
    data: faker.lorem.sentence(),
  }));
};

const DATA = [
  ...getRandomData(20),
  { title: "Hey Joe!" },
  ...getRandomData(20),
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
    marginHorizontal: 16,
  },
  item: {
    padding: 20,
    marginVertical: 8,
    backgroundColor: "#f9c2ff",
  },
  header: {
    fontSize: 32,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
  },
});

const SCROLL_TO_INDEX = 20;

const Item = ({ title, index }) => {
  return (
    <View
      style={[
        styles.item,
        ...[SCROLL_TO_INDEX === index ? { backgroundColor: "yellow" } : {}],
      ]}
    >
      <Text style={styles.title}>
        {index}. {title}
      </Text>
    </View>
  );
};

const renderItem = ({ item, index }) => (
  <Item title={item.title} index={index} />
);

const ITEM_HEIGHT = 85;

const FixedFlatListTestScreen = () => {
  const [data, setData] = useState(DATA);

  useEffect(() => {
    setTimeout(() => {
      setData([...data, ...getRandomData(50)]);
      console.log("extended");
    }, 2000);
  }, []);

  const debouncedCallback = debounce(() => {
    console.log("on end reached");
    setData([...getRandomData(5), ...data]);
  }, 1000);

  return (
    <SafeAreaView style={styles.container}>
      <>
        <FlatList
          data={data}
          keyExtractor={(item, index) => item + index}
          initialNumToRender={30}
          initialScrollIndex={SCROLL_TO_INDEX}
          renderItem={renderItem}
          inverted={true}
          pagingEnabled={false}
          removeClippedSubviews={false}
          getItemLayout={(data, index) => ({
            length: ITEM_HEIGHT,
            offset: ITEM_HEIGHT * index,
            index,
          })}
          refreshing={false}
          // onRefresh={() => {
          //   debouncedCallback();
          //   console.log("refresh");
          // }}
        />
      </>
    </SafeAreaView>
  );
};

export default FixedFlatListTestScreen;
