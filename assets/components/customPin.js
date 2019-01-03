/**
 * This will make a rounded box that can have a number put into it
 */
import PropTypes from 'prop-types';
import React, {Component} from 'react';
import {TextInput, View, StyleSheet} from 'react-native';

class PinNumber extends Component {

     static propTypes = {
          textStyles: PropTypes.number.isRequired,
          boxStyles: PropTypes.any.isRequired,
     }

     render = () => {

          const {textStyles, boxStyles} = this.props;

          return (

               <View style={boxStyles}>
                    <TextInput style={textStyles}></TextInput>
               </View>

          );
     }

}

export default PinNumber;