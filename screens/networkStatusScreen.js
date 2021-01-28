import React from "react";
import { View, Text } from "react-native";
import styles from "../styles";
import { NetworkProvider, NetworkConsumer } from "react-native-offline";

const NetworkStatusScreen = () => {
  return (
    <NetworkProvider
      pingServerUrl="https://joinrivet.com/"
      pingInterval={10000}
      pingOnlyIfOffline={true}
    >
      <View style={styles.container}>
        <NetworkConsumer>
          {({ isConnected }) =>
            isConnected ? (
              <Text>You are online</Text>
            ) : (
              <Text>You are offline</Text>
            )
          }
        </NetworkConsumer>
      </View>
    </NetworkProvider>
  );
};

export default NetworkStatusScreen;
