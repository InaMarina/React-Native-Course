import React from 'react';
import {StyleSheet, Dimensions} from 'react-native';
import {TextInput} from 'react-native-paper';

//Find out width & height of device
const {width, height} = Dimensions.get('screen');

//Input component that gets some variables as props
export default function FormInput({labelName, ...rest}) {
  return (
    <TextInput
      label={labelName}
      style={styles.input}
      numberOfLines={1}
      {...rest}
    />
  );
}

//Stylesheet
const styles = StyleSheet.create({
  input: {
    marginTop: 10,
    marginBottom: 10,
    width: width / 1.5,
    height: height / 15,
  },
});
