import React, { useState } from 'react';
import { TouchableOpacity, Text } from 'react-native';
import styles from './Button.style';
import axios from 'axios';

const Button = ({buttonTitle, width}) => {

  return ( 
    <TouchableOpacity style={[styles.mainButtonContainer, {width}]}>
        <Text style={styles.buttonTitle}> {buttonTitle} </Text>
    </TouchableOpacity>
  )
}

export default Button;