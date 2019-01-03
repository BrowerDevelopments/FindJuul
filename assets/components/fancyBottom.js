/**
 * Makes a fancy shape thingy
 */
import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';

class BottomStyling extends Component {

     render = () => {
          return (
               <View style={styles.parent}>
                    <View style={styles.one}></View> 
                    <View></View> 
                    <View></View> 
                    <View></View> 
               </View>
          );
     }

}

const styles = StyleSheet.create({
     parent: {
          justifyContent: 'flex-end',
          height: 245,
     },
     one: {
          color: '#17172E',
          borderTopRightRadius: 245,
          height: 245,
          width: 375,
     },
     two: {
          color: '#262645',
          borderTopRightRadius: 245,
          height: 186,
          width: 284,
     }
});

export default BottomStyling;