import React, {useState, useContext} from 'react';
import {View, StyleSheet, ImageBackground} from 'react-native';
import {Title} from 'react-native-paper';

//Importing components
import FormInput from '../components/FormInput';
import FormButton from '../components/FormButton';

//Imported AuthContext make some functions and user information
//available to use everywhere where it is imported
import {AuthContext} from '../navigation/AuthProvider';

export default function Login({navigation}) {
  const {login} = useContext(AuthContext);

  //Statehooks
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <ImageBackground
      source={require('../assets/background.png')}
      style={styles.image}>
      {/* Main content of the screen: input for email, input for password, 
      button login (function from authcontext) 
      button for navigating to signupscreen*/}
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

//Styles
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
