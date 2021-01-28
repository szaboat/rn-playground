import React, { useState } from "react";
import { View, Text, FlatList, StyleSheet, SafeAreaView } from "react-native";
import Constants from "expo-constants";
import faker from "faker";

// https://stackoverflow.com/a/57059772/475565

function* range(start, end) {
  for (let i = start; i <= end; i++) {
    yield i;
  }
}

const getRandomData = (num) => {
  const items = [...range(1, num)];
  return items.map(() => ({
    title: faker.lorem.sentence(Math.ceil(Math.random() * 25)),
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

const Item = ({ title, index, onLayout }) => {
  return (
    <View
      onLayout={onLayout}
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

const FlatListTestScreen = () => {
  const [data, _setData] = useState(DATA);

  return (
    <SafeAreaView style={styles.container}>
      <List data={data} />
    </SafeAreaView>
  );
};

class List extends React.PureComponent {
  constructor(props) {
    super(props);
    this._flatList = React.createRef();
    this._layouts = [];
  }

  getOffsetByIndex(index) {
    let offset = 0;
    for (let i = 0; i < index; i += 1) {
      const elementLayout = this._layouts[i];
      if (elementLayout && elementLayout.height) {
        offset += this._layouts[i].height;
      }
    }
    return offset;
  }

  getOffsetByIndexInverted(index) {
    let offset = 0;
    console.log(this._layouts.length);
    for (let i = this._layouts.length; i == index; i = i - 1) {
      console.log(i);
      const elementLayout = this._layouts[i];
      if (elementLayout && elementLayout.height) {
        offset += this._layouts[i].height;
      }
    }
    return offset;
  }

  scrollToIndex(index) {
    const offset = this.getOffsetByIndex(index);
    this._flatList.current.scrollToOffset({ offset, animated: true });
  }

  addToLayoutsMap(layout, index) {
    this._layouts[index] = layout;
  }

  componentDidMount() {
    setTimeout(() => {
      this.scrollToIndex(SCROLL_TO_INDEX);
    }, 1);
  }

  render() {
    const { data } = this.props;

    return (
      <FlatList
        data={data}
        keyExtractor={(item, index) => item + index}
        initialNumToRender={30}
        inverted={true}
        renderItem={({ item, index }) => {
          return (
            <View
              onLayout={({ nativeEvent: { layout } }) => {
                this.addToLayoutsMap(layout, index);
              }}
            >
              <Item title={item.title} index={index} />
            </View>
          );
        }}
        ref={this._flatList}
      />
    );
  }
}

export default FlatListTestScreen;
