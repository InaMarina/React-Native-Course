import React from 'react';
import {
  View,
  StyleSheet,
  StatusBar,
  ScrollView,
  ImageBackground,
} from 'react-native';
import {IconButton, Title, Card, Paragraph} from 'react-native-paper';

export default function LearnScreen({navigation}) {
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
              <Card.Cover source={require('../assets/luciddream.png')} />
              <Card.Content>
                <Title>Selkounet (lucid dreams)</Title>
                <Paragraph>
                  Selkounet ovat tietoisia unia, joita jokainen voi oppia
                  näkemään. Useimmilta taidon oppimiseen menee muutama viikko
                  tai kuukausi. Selkounien opettelu alkaa unimuistin
                  kehittämisellä. Ilman unien muistamista niistä on mahdoton
                  tulla tietoisiksi. Seuraavaksi tietoisuutta unissa aletaan
                  harjoitella päivällä. Jos et koskaan ajattele päivällä olevasi
                  unessa, et tee niin myöskään yöllä unissasi.
                </Paragraph>
              </Card.Content>
            </Card>

            <Card style={styles.card}>
              <Card.Cover source={require('../assets/remember.png')} />
              <Card.Content>
                <Title>Unien muistaminen</Title>
                <Paragraph>
                  Unien muistaminen on tapa päästä lähemmäs selkounia, ja
                  tehokas työkalu unien muistamiseen on niiden kirjoittaminen.
                  Selkounen voi saada aikaan muistin avulla. Stephen LaBerge
                  kehitti tekniikan tehdessään väitöskirjaansa 1970-luvun
                  lopulla Stanfordin yliopistossa. Hän huomasi sen olevan hyvin
                  tehokas tekniikka, joka nosti hänen selkounien määrän
                  nopeasti.
                </Paragraph>
              </Card.Content>
            </Card>

            <Card style={styles.card}>
              <Card.Cover source={require('../assets/nightmare.png')} />
              <Card.Content>
                <Title>Painajaiset</Title>
                <Paragraph>
                  Painajaiset voivat olla pelottavia. Tietoista unitilaa voi
                  käyttää pelottavien unikuvien ja tapahtumien kohtaamiseen.
                  Mikä on pahinta, mitä voi sattua? Heräät sängyssäsi lämpimän
                  peiton alla pää tyynyssä. Omia uniaan ei todellisuudessa
                  tarvitse pelätä. Tämän oivaltaminen vaatii kuitenkin unessa
                  itse unen oivaltamista.
                </Paragraph>
              </Card.Content>
            </Card>

            <Card style={styles.card}>
              <Card.Cover source={require('../assets/research.png')} />
              <Card.Content>
                <Title>Unien tulkinta</Title>
                <Paragraph>
                  Tiede ei ole löytänyt mitään selitystä sille, miksi joskus
                  uneksimme lentämisestä, hampaiden irtoamisesta, tai
                  käärmeistä. Unien merkityksestä on kyllä lukuisia teorioita,
                  mutta yhdellekään niistä ei ole löytynyt vakuuttavaa näyttöä.
                  Hyvin mahdollisesti unia ei voikaan tulkita minkään yhtenäisen
                  järjestelmän mukaan. Yhden näkemyksen mukaan unet ovat
                  yönaikaista valmistautumista mahdollisiin uhkatilanteisiin.
                  Toisen teorian mukaan unet ovat vain satunnaista kohinaa
                  aivoissa. Kolmannen käsityksen mukaan päivän tapahtumien
                  käsittely jatkuu yöllä ilman käsitystä todellisuudesta.
                  Leikkimielisiä tulkintoja omista unistaan voi yrittää tehdä
                  vaikkapa näitä teorioita yhdistellen. Mikäli unen sisällöt
                  kiinnostavat, paras lähestymistapa niihin on unipäiväkirjan
                  pitäminen. Unet kannattaa kirjata ylös heti herättyäsi, sillä
                  ne unohtuvat yleensä nopeasti.{' '}
                </Paragraph>
              </Card.Content>
            </Card>
          </View>
        </ScrollView>
      </View>
    </ImageBackground>
  );
}
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
