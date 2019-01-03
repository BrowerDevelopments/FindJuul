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

                    <PinNumber />
                    <PinNumber />
                    <PinNumber />
                    <PinNumber />
                    <PinNumber />

               </View>

          );
     }

}

const styles = StyleSheet.create({
     horizontalView: {
          flexDirection: 'row',
     }
});

export default FullPin;