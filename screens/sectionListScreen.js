import React, { useState } from "react";
import {
  View,
  Text,
  SectionList,
  StyleSheet,
  SafeAreaView,
} from "react-native";
import Constants from "expo-constants";
import faker from "faker";
import UUID from "uuid-js";
import getSectionItemLayout from "sectionlist-get-itemlayout";

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
    id: UUID.create().toString(),
  }));
};

const getRandomSections = (num) => {
  const items = [...range(1, num)];
  return items.map(() => ({
    data: getRandomData(5),
    date: faker.date.past(),
  }));
};

const SECTIONS = getRandomSections(50);

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
    backgroundColor: "yellow",
  },
  title: {
    fontSize: 24,
  },
});

const TARGET = [1, 3];

const Item = ({ title, id, index, onLayout, sectionIndex }) => {
  return (
    <View
      onLayout={onLayout}
      style={[
        styles.item,
        ...[
          sectionIndex === TARGET[0] && index === TARGET[1]
            ? { backgroundColor: "orange" }
            : {},
        ],
      ]}
    >
      <Text style={styles.title}>
        {sectionIndex}.{index}. {title}
      </Text>
    </View>
  );
};

const SectionListTestScreen = () => {
  const [sections, setSections] = useState(SECTIONS);

  return (
    <SafeAreaView style={styles.container}>
      <List sections={sections} scrollToElement={{ id: "test-id" }} />
    </SafeAreaView>
  );
};

class List extends React.PureComponent {
  constructor(props) {
    super(props);
    this._flatList = React.createRef();
    this._layouts = {};

    this.getItemLayout = getSectionItemLayout({
      getItemHeight: (rowData, sectionIndex, rowIndex) =>
        this._layouts[sectionIndex][rowIndex].height,
      getSeparatorHeight: () => 0, // The height of your separators
      getSectionHeaderHeight: () => 20, // The height of your section headers
      getSectionFooterHeight: () => 10, // The height of your section footers
    });
  }

  getOffsetByIndex(index, sectionIndex) {
    let offset = 0;
    for (let j = 0; j < section; j += 1) {
      for (let i = 0; i < index; i += 1) {
        const elementLayout = this._layouts[j][i];
        if (elementLayout && elementLayout.height) {
          offset += this._layouts[j][i].height;
        }
      }
    }
    return offset;
  }

  scrollToIndex(sectionIndex, index) {
    this._flatList.current.scrollToLocation({
      sectionIndex: index,
      itemIndex: sectionIndex,
    });
  }

  scrollToItem(item) {
    const { sections } = this.props;
    const index = sections.findIndex((i) => i.id === item.id);
    this.scrollToIndex(index);
  }

  addToLayoutsMap(layout, sectionIndex, index) {
    if (this._layouts[sectionIndex]) {
      this._layouts[sectionIndex][index] = layout;
    } else {
      this._layouts[sectionIndex] = {};
    }
  }

  componentDidMount() {
    setTimeout(() => {
      this.scrollToIndex(TARGET[0], TARGET[1]);
    }, 100);
  }

  renderSectionFooter({ item }) {
    return (
      <View styles={styles.item}>
        <Text>{item.date}</Text>
      </View>
    );
  }

  render() {
    const { sections } = this.props;

    return (
      <SectionList
        sections={sections}
        initialNumToRender={30}
        inverted={true}
        getItemLayout={(p, index) => {
          console.log(p, index);
          return { length: 100, offset: 10, index: index };
        }}
        renderItem={({ item, index, section }) => {
          const sectionIndex = sections.findIndex((s) => s === section);
          return (
            <View
              onLayout={({ nativeEvent: { layout } }) => {
                this.addToLayoutsMap(layout, sectionIndex, index);
              }}
            >
              <Item
                title={item.title}
                index={index}
                id={item.id}
                sectionIndex={sectionIndex}
              />
            </View>
          );
        }}
        removeClippedSubviews={false}
        renderSectionFooter={({ section: { date } }) => (
          <Text
            style={styles.header}
          >{`${date.getFullYear()}-${date.getMonth()}-${date.getDay()}`}</Text>
        )}
        ref={this._flatList}
        onScrollToIndexFailed={(error) => {
          console.log(error);
        }}
      />
    );
  }
}

export default SectionListTestScreen;
