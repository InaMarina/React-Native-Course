import React from 'react';
import FormButton from '../components/FormButton';

import {View, ImageBackground, StyleSheet, StatusBar} from 'react-native';

export default function FirstScreen({navigation}) {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#6646ee" />
      <ImageBackground
        source={require('../assets/background.png')}
        style={styles.image}>
        <View style={styles.viewContainer}>
          <View style={styles.view}>
            <FormButton
              title="Login"
              modeValue="contained"
              labelStyle={styles.loginButtonLabel}
              onPress={() => navigation.navigate('Login')}
            />
            <FormButton
              title="SignUp"
              modeValue="contained"
              labelStyle={styles.loginButtonLabel}
              onPress={() => navigation.navigate('Signup')}
            />
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  viewContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  view: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
