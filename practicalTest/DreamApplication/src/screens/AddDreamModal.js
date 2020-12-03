import React, {useState, useContext} from 'react';
import {StyleSheet, View, Dimensions, Alert} from 'react-native';
import {IconButton, TextInput} from 'react-native-paper';

//Importing firestore where data is stored
import firestore from '@react-native-firebase/firestore';

//Importing components
import FormInput from '../components/FormInput';
import FormButton from '../components/FormButton';

//Imported AuthContext make some functions and user information
//available to use everywhere where it is imported
import {AuthContext} from '../navigation/AuthProvider';

//Find out width & height of device, used in stylesheet
const {width, height} = Dimensions.get('screen');

export default function AddDreamModal({navigation}) {
  const {user} = useContext(AuthContext);

  //reference to the firestore collection, used to write to the collection
  const ref = firestore().collection('dreams');

  //Statehooks
  const [dreamTitle, setDreamTitle] = useState('');
  const [dreamContent, setDreamContent] = useState('');

  //asynchronious function that writes the object to firestore collection,
  //uses both user from auth and the data from statehooks
  async function addDream() {
    await ref.add({
      userEmail: user.email.toString(),
      title: dreamTitle,
      content: dreamContent,
    });

    //emptying the statehooks and launching alert for user
    setDreamTitle('');
    setDreamContent('');
    dreamAdded();
  }

  //alert
  const dreamAdded = () =>
    Alert.alert(
      'Uni lisätty!',
      '',
      [{text: 'OK', onPress: () => console.log('OK Pressed')}],
      {cancelable: false},
    );

  return (
    <>
      {/* button for closing the screen */}
      <View style={styles.closeButtonContainer}>
        <IconButton
          icon="close-circle"
          size={40}
          color="#b55f91"
          onPress={() => navigation.goBack()}
        />
      </View>

      {/* content of the screen: input for title, input for dream, button for add */}
      <View style={styles.container}>
        <FormInput
          label={'Otsikko:'}
          value={dreamTitle}
          onChangeText={(title) => setDreamTitle(title)}
        />
        <View style={styles.textAreaContainer}>
          <TextInput
            mode="outlined"
            style={styles.textArea}
            placeholder="Kirjoita unesi tähän:"
            placeholderTextColor="grey"
            numberOfLines={10}
            multiline={true}
            value={dreamContent}
            onChangeText={(dream) => setDreamContent(dream)}
          />
        </View>
        <FormButton
          title="Lisää uni!"
          modeValue="contained"
          labelStyle={styles.buttonLabel}
          onPress={() => {
            addDream();
          }}
        />
      </View>
    </>
  );
}

//Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(243, 230, 251,  0.5)',
  },
  buttonLabel: {
    fontSize: 22,
    color: 'white',
  },
  closeButtonContainer: {
    position: 'absolute',
    top: 10,
    right: 10,
    zIndex: 1,
  },
  textAreaContainer: {
    width: width / 1.4,
    padding: 5,
  },
  textArea: {
    height: height * 0.5,
    justifyContent: 'flex-start',
  },
});
