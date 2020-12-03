import React from 'react';
import {
  View,
  StyleSheet,
  StatusBar,
  ScrollView,
  ImageBackground,
} from 'react-native';
import {IconButton, Title, Card, Paragraph} from 'react-native-paper';

//Returns backgroundimage, and cards with hardcoded content
export default function InfoScreen({navigation}) {
  return (
    <ImageBackground
      source={require('../assets/background.png')}
      style={styles.image}>
      <View style={styles.rootContainer}>
        <StatusBar backgroundColor="#1b053b" />

        <View style={styles.closeButtonContainer}>
          <IconButton
            icon="close-circle"
            size={40}
            color="#fea34d"
            onPress={() => navigation.goBack()}
          />
        </View>

        <ScrollView style={styles.scrollView}>
          <View style={styles.container}>
            <Card style={styles.card}>
              <Card.Cover source={require('../assets/navigate1.png')} />
              <Card.Content>
                <Title>Navigointi menu napista</Title>
                <Paragraph>
                  Voit navigoida vasemman ylälaidan navigaationapista, joka avaa
                  navigaatiopalkin vasempaan laitaan.
                </Paragraph>
              </Card.Content>
            </Card>

            <Card style={styles.card}>
              <Card.Cover source={require('../assets/navigate3.png')} />
              <Card.Content>
                <Title>Navigointi alalaidsta</Title>
                <Paragraph>
                  Voit myös navigoida alalaidan navigaatiopalkin avulla:
                  Alalaidan koti-merkkistä pääset takaisin aloitussivulle.
                  Alalaidan lista-merkkistä pääset katsomaan jo lisättyjä
                  uniasi. Alalaidan plus-merkkistä pääset lisäämään itsellesi
                  uuden unen
                </Paragraph>
              </Card.Content>
            </Card>

            <Card style={styles.card}>
              <Card.Cover source={require('../assets/navigate2.png')} />
              <Card.Content>
                <Title>Kirjaudu ulos</Title>
                <Paragraph>
                  Voit kirjautua ulos sovelluksesta etusivun kautta oikeasta
                  yläkulmasta
                </Paragraph>
              </Card.Content>
            </Card>
          </View>
        </ScrollView>
      </View>
    </ImageBackground>
  );
}

//Styles
const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  closeButtonContainer: {
    position: 'absolute',
    top: 10,
    right: 10,
    zIndex: 1,
  },
  scrollView: {
    marginHorizontal: 20,
    marginVertical: 10,
  },
  card: {
    marginVertical: 5,
  },
});
