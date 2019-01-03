/**
 * Makes five of the custom pins
 */
import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import PinNumber from "../components/customPin"

class FullPin extends Component {

     render = () => {
          return (

               <View style={styles.horizontalView}>

                    <PinNumber
                         textStyles={styles.pinText}
                         boxStyles={styles.pinBox}
                    />

                    <PinNumber
                         textStyles={styles.pinText}
                         boxStyles={styles.pinBox}
                    />

                    <PinNumber
                         textStyles={styles.pinText}
                         boxStyles={styles.pinBox}
                    />

                    <PinNumber
                         textStyles={styles.pinText}
                         boxStyles={styles.pinBox}
                    />

                    <PinNumber
                         textStyles={styles.pinText}
                         boxStyles={styles.pinBox}
                    />

               </View>

          );
     }

}

const styles = StyleSheet.create({
     horizontalView: {
          flexDirection: 'row',
     },
     pinText: {
          color: '#262645',
          fontSize: 29,
          fontWeight: 'bold',
     },
     pinBox: {
          height: 50,
          width: 50,
          backgroundColor: '#D9D9D9',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 10,
          margin: 3,
     }
});

export default FullPin;