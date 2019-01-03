/**
 * This will make a rounded box that can have a number put into it
 */
import PropTypes from 'prop-types';
import React, {Component} from 'react';
import {TextInput, View, StyleSheet} from 'react-native';

class PinNumber extends Component {

     render = () => {

          return (

               <View style={styles.pinBox}>
                    <TextInput style={styles.pinText}></TextInput>
               </View>

          );
     }

}

const styles = StyleSheet.create({
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

export default PinNumber;