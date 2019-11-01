import React, {useState} from 'react';
import { View, Text,  TextInput, StyleSheet } from 'react-native';

import ParsedText from 'react-native-parsed-text';

const styles = StyleSheet.create({

  url: {
    color: 'red',
    textDecorationLine: 'underline',
  },

  email: {
    textDecorationLine: 'underline',
  },

  text: {
    color: 'black',
    fontSize: 15,
  },

  phone: {
    color: 'blue',
    textDecorationLine: 'underline',
  },

  name: {
    color: 'red',
  },

  username: {
    color: 'green',
    fontWeight: 'bold'
  },

  magicNumber: {
    fontSize: 42,
    color: 'pink',
  },

  mention: {
    color: 'red',
    fontWeight: 'bold',
  },
});

class RichInput extends React.Component {
  state: any;

  constructor(props) {
    super(props);
    this.state = {text: 'Hello @World'};
  }
  render() {

    //define delimiter
    // let delimiter = /\s+/;

    // //split string
    // let _text = this.state.text;
    // let token, index, parts = [];
    // while (_text) {
    //   delimiter.lastIndex = 0;
    //   token = delimiter.exec(_text);
    //   if (token === null) {
    //     break;
    //   }
    //   index = token.index;
    //   if (token[0].length === 0) {
    //     index = 1;
    //   }
    //   parts.push(_text.substr(0, index));
    //   parts.push(token[0]);
    //   index = index + token[0].length;
    //   _text = _text.slice(index);
    // }
    // parts.push(_text);

    // //highlight hashtags
    // parts = parts.map((text) => {
    //   if (/^@/.test(text)) {
    //     return <Text key={text} style={styles.hashtag}>{text}</Text>;
    //   } else {
    //     return text;
    //   }
    // });

    const renderText = (matchingString, matches) => {
      // matches => ["[@michel:5455345]", "@michel", "5455345"]
      let pattern = /\[(@[^:]+):([^\]]+)\]/i;
      let match = matchingString.match(pattern);
      return `^^${match[1]}^^`;
    }

    return (
      <View>
        <Text>Edited text</Text>
        <TextInput
          multiline={true}
          style={styles.multiline}
          onChangeText={(text) => {
            this.setState({text});
          }}>
          <ParsedText
          style={styles.text}
          parse={
            [
              {type: 'url',                       style: styles.url, onPress: this.handleUrlPress},
              {type: 'phone',                     style: styles.phone, onPress: this.handlePhonePress},
              {type: 'email',                     style: styles.email, onPress: this.handleEmailPress},
              {pattern: /Bob|David/,              style: styles.name, onPress: this.handleNamePress},
              {pattern: /\[(@[^:]+):([^\]]+)\]/i, style: styles.username, onPress: this.handleNamePress, renderText: renderText},
              {pattern: /42/,                     style: styles.magicNumber},
              {pattern: /@(\w+)/,                 style: styles.mention},
            ]
          }
          childrenProps={{allowFontScaling: false}}
        >
          {this.state.text}
        </ParsedText>
        </TextInput>

        <View style={{marginTop: 40}}>
          <Text>Text value</Text>
          <Text>
            {this.state.text}
          </Text>
        </View>

      </View>
    );
  }
}

export default RichInput;