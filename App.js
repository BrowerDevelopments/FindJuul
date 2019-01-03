import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import FullPin from '../FindJuul/assets/components/fullPin';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.fillerView}></View>

        <View  style={styles.titleView} >
          <Text style={styles.titleText}>Find My Juul</Text>
        </View>

        <View style={styles.pinView}>
          <FullPin />
          <Text style={styles.pinText}>Enter 5 digit pin</Text>

          <View style={styles.horizontalView}>
            <Text style={styles.shopTextNoUnderline}>Or </Text>
            <Text style={styles.shopTextUnderline}>shop skins</Text>
          </View>

          <Image
            source={require('/Volumes/Coding/ReactNative/FindJuul/assets/images/fancyBottom.png')}
            resizeMode='contain'
          />
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#262645',
    alignItems: 'center',
  },
  fillerView: {
    flex: 1,
    backgroundColor: '#262645',
  },
  titleView: {
    flex: 1,
    alignItems: 'center',
  },
  titleText: {
    color: '#D9D9D9',
    fontSize: 29,
    fontWeight: 'bold',
    letterSpacing: 6,
  },
  pinView: {
    flex: 6,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  pinText: {
    color: '#D9D9D9',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 40,
  },
  shopTextNoUnderline: {
    color: '#D9D9D9',
    fontSize: 15,
  },
  shopTextUnderline: {
    color: '#D9D9D9',
    fontSize: 15,
    textDecorationLine: 'underline',
  },
  horizontalView: {
    flexDirection: 'row',
    marginTop: 40,
}, 
});