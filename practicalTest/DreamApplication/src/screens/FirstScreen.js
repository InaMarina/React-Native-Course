import React from 'react';

//Import for button component
import FormButton from '../components/FormButton';

import {View, ImageBackground, StyleSheet, StatusBar} from 'react-native';

//Backgoundimage + two buttons for navigation. statusbar hidden
export default function FirstScreen({navigation}) {
  return (
    <View style={styles.container}>
      <StatusBar hidden={true} />
      <ImageBackground
        source={require('../assets/background.png')}
        style={styles.image}>
        <View style={styles.viewContainer}>
          <View style={styles.view}>
            <FormButton
              title="Kirjaudu sisään"
              modeValue="contained"
              labelStyle={styles.loginButtonLabel}
              onPress={() => navigation.navigate('Login')}
            />
            <FormButton
              title="Rekisteröidy"
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
