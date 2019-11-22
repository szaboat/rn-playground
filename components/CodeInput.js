import React, {useState, createRef} from "react";
import { View, Text } from "react-native";
import SMSVerifyCode from 'react-native-sms-verifycode'

const VerifyCode = () => {
  const [value, setValue] = useState();

  // const inputRef = createRef();
  // const [ref, setRef] = useState(inputRef);

  return <>
    <SMSVerifyCode
      // ref={(c) => setRef(c)}
      autoFocus={true}
      onInputCompleted={() => {
        console.log(`completed with ${value}`)
      }}
      onInputChangeText={setValue}
      verifyCodeLength={6}
      codeViewBackgroundColor={"rgb(245, 245, 245)"}
      codeViewBorderColor={"rgb(245, 245, 245)"}
      focusedCodeViewBackgroundColor="red"
      codeFontSize={25}
      containerPaddingHorizontal={50}
      codeViewHeight={60}
      codeViewWidth={42}
    /> 
  </>
}

export default VerifyCode;