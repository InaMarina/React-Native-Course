import React, {useContext} from 'react';
import FormButton from '../components/FormButton';

import {View, ImageBackground, StyleSheet, StatusBar} from 'react-native';
import {Title} from 'react-native-paper';

import {AuthContext} from '../navigation/AuthProvider';

export default function DreamDiaryScreen({navigation}) {
  const {logout} = useContext(AuthContext);
  return (
    <ImageBackground
      source={require('../assets/background.png')}
      style={styles.image}>
      <View style={styles.container}>
        <Title style={styles.titleText}>Sisällä!</Title>
        <FormButton
          title="Kirjaudu ulos"
          modeValue="contained"
          labelStyle={styles.loginButtonLabel}
          onPress={() => logout()}
        />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  titleText: {
    fontSize: 24,
    marginBottom: 10,
    color: '#ffffff',
  },
});
