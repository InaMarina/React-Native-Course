import React, {useState, useContext} from 'react';
import {View, StyleSheet, ImageBackground} from 'react-native';
import {Title} from 'react-native-paper';
import FormInput from '../components/FormInput';
import FormButton from '../components/FormButton';

import {AuthContext} from '../navigation/AuthProvider';

export default function Login({navigation}) {
  const {login} = useContext(AuthContext);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <ImageBackground
      source={require('../assets/background.png')}
      style={styles.image}>
      <View style={styles.container}>
        <Title style={styles.titleText}>
          Tervetuloa pitämään kirjaa unistasi!
        </Title>
        <FormInput
          labelName="Sähköposti:"
          value={email}
          autoCapitalize="none"
          onChangeText={(userEmail) => setEmail(userEmail)}
        />
        <FormInput
          labelName="Salasana:"
          value={password}
          secureTextEntry={true}
          onChangeText={(userPassword) => setPassword(userPassword)}
        />
        <FormButton
          title="Sisään!"
          modeValue="contained"
          labelStyle={styles.loginButtonLabel}
          //login function is used with the help of AuthCntext
          onPress={() => login(email, password)}
        />
        <FormButton
          title="Uusi käyttäjä? Rekisteröidy!"
          modeValue="text"
          uppercase={false}
          labelStyle={styles.navButtonText}
          onPress={() => navigation.navigate('Signup')}
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

  titleText: {
    fontSize: 24,
    marginBottom: 10,
    color: '#ffffff',
  },
  loginButtonLabel: {
    fontSize: 22,
  },
  navButtonText: {
    fontSize: 16,
    color: '#ffffff',
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
});
