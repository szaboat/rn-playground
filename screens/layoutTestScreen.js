import React from "react";
import { View, Text, SectionList } from "react-native";
import styles from "../styles";
import { TextInput } from "react-native-gesture-handler";
import Autocomplete from "react-native-autocomplete-input";

const LayoutTestScreen = () => {
  const A = ["Apple", "Apricot", "Avocado"];
  const B = ["Banana", "Blackberry"];
  const C = ["Cherry", "Coconut"];

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="foo"
        style={{
          borderWidth: 1,
          borderColor: "black",
          padding: 10,
          width: 200,
          marginBottom: 10,
        }}
      />

      <View>
        <Autocomplete
          containerStyle={{ width: 200 }}
          autoCapitalize="none"
          autoCorrect={false}
          data={["foo", "bar", "bar", "foobar", "foobarbaz"]}
          placeholder="Enter name"
          renderItem={() => (
            <View>
              <Text style={styles.itemText}>Foobar</Text>
            </View>
          )}
        />
      </View>

      <SectionList
        sections={[
          { title: "Fruits Name From A", data: A },

          { title: "Fruits Name From B", data: B },

          { title: "Fruits Name From C", data: C },
        ]}
        renderSectionHeader={({ section }) => (
          <Text style={styles.SectionHeaderStyle}> {section.title} </Text>
        )}
        renderItem={({ item }) => <Text> {item} </Text>}
        keyExtractor={(item, index) => index}
        style={{ height: 100, overflow: "hidden" }}
      />
      {/* </View> */}

      <View>
        <TextInput
          placeholder="foo"
          style={{
            borderWidth: 1,
            borderColor: "black",
            padding: 10,
            width: 200,
            marginBottom: 10,
          }}
        />
      </View>

      <View
        style={{
          width: 200,
          height: 200,
          backgroundColor: "green",
        }}
      >
        <View
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 400,
            height: 100,
            backgroundColor: "red",
          }}
        />
      </View>
    </View>
  );
};

export default LayoutTestScreen;
