import React, {useState} from 'react';
import {StyleSheet, View, TextInput, Dimensions, Alert} from 'react-native';
import {IconButton} from 'react-native-paper';

import firestore from '@react-native-firebase/firestore';

import FormInput from '../components/FormInput';
import FormButton from '../components/FormButton';

const {width} = Dimensions.get('screen');

export default function AddDreamModal({navigation}) {
  const ref = firestore().collection('dreams');

  const [dreamTitle, setDreamTitle] = useState('');
  const [dreamContent, setDreamContent] = useState('');

  async function addDream() {
    await ref.add({
      title: dreamTitle,
      content: dreamContent,
    });
    dreamAdded();

    setDreamTitle('');
    setDreamContent('');
  }

  const dreamAdded = () =>
    Alert.alert(
      'Uni lisätty!',
      '',
      [{text: 'OK', onPress: () => console.log('OK Pressed')}],
      {cancelable: false},
    );

  return (
    <>
      <View style={styles.closeButtonContainer}>
        <IconButton
          icon="close-circle"
          size={40}
          color="#fea34d"
          onPress={() => navigation.goBack()}
        />
      </View>
      <View style={styles.container}>
        <FormInput
          label={'Otsikko:'}
          value={dreamTitle}
          onChangeText={(title) => setDreamTitle(title)}
        />
        {/*<InputField
          label={'Kirjoita unesi tähän:'}
          value={dreamContent}
          onChangeText={(dream) => setDreamContent(dream)}
        />*/}
        <View style={styles.textAreaContainer}>
          <TextInput
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
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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
    borderColor: '#1b053b',
    borderRadius: 25,
    width: width / 1.5,
    borderWidth: 2,
    padding: 5,
  },
  textArea: {
    height: 150,
    justifyContent: 'flex-start',
  },
});
