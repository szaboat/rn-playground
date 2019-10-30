import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet} from "react-native";
import styles from "../styles";
import MentionsTextInput from 'react-native-mentions';


const componentStyle = StyleSheet.create({
  userIconBox: {
    alignSelf: 'flex-start',
    padding: 10,
    borderRadius: 20,
    backgroundColor: "red",
    marginRight: 5,
  },

  suggestionsRowContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    flex: 1,
    marginBottom: 5,
  }
})

export default ChatInputSreen = () => {
  const data = [
    {
      UserName: "szaboat",
      DisplayName: "Attila Szabo",
      id: 1
    },
    {
      UserName: "jeff",
      DisplayName: "Jeff Rubioux",
      id: 2
    },
    {
      UserName: "meredith",
      DisplayName: "Meredith J Harris",
      id: 3 
    },
  ]

  const [suggestions, setSuggestions] = useState(data);
  const [value, setValue] = useState();
  const [keyword, setKeyword] = useState();

  const hidePanel = () => {
    console.log("hide panel");
  }

  const onSuggestionTap = (username, hidePanel) => {
    hidePanel();
    const comment = value.slice(0, - keyword.length);
    setValue(comment + '@' + username);
  }

  const getInitials = (userName) => (
    userName.split(" ").map((item) => item.substring(0,1).toUpperCase()).slice(0,2).join("")
  )

  const renderSuggestionsRow = ({ item }, hidePanel) => {
    return (
      <TouchableOpacity onPress={() => onSuggestionTap(item.UserName, hidePanel)}>
        <View style={componentStyle.suggestionsRowContainer}>
          <View style={componentStyle.userIconBox}>
            <Text style={styles.usernameInitials}>{!!item.DisplayName && getInitials(item.DisplayName)}</Text>
          </View>
          <View style={styles.userDetailsBox}>
            <Text style={styles.displayNameText}>{item.DisplayName}</Text>
            <Text style={styles.usernameText}>@{item.UserName}</Text>
          </View>
        </View>
      </TouchableOpacity>
    )
  }

  const setSuggestionsAndKeyword = (keyword) => {
    setKeyword(keyword)
    const word = keyword.replace("@", "");

    setSuggestions(suggestions.filter((item) => {
      return item.UserName.indexOf(word) != -1
    }));
  }

  return (
    <View style={styles.container}>
        <MentionsTextInput
        textInputStyle={
          { 
            borderColor: '#ebebeb',
            borderWidth: 1,
            padding: 5,
            fontSize: 15,
            alignSelf: 'stretch',
            textAlign: 'center',
          }
        }
        suggestionsPanelStyle={{ backgroundColor: 'rgba(100,100,100,0.1)' }}
        loadingComponent={() => <View style={{ flex: 1, width, justifyContent: 'center', alignItems: 'center' }}><ActivityIndicator /></View>}
        textInputMinHeight={30}
        textInputMaxHeight={80}
        trigger={'@'}
        triggerLocation={'new-word-only'}
        value={value}
        onChangeText={(val) => { setValue(val) }}
        triggerCallback={(keyword) => setSuggestionsAndKeyword(keyword)}
        renderSuggestionsRow={renderSuggestionsRow}
        suggestionsData={suggestions} 
        keyExtractor={(item, index) => item.UserName} 
        suggestionRowHeight={45}
        horizontal={false}
        MaxVisibleRowCount={3}
      />
    </View>
  )
}