import React, { useState } from 'react';
import { View, Text } from 'react-native';
import styles from './PointsCard.style';
import axios from 'axios';

const PointsCard = () => {
    const [totalPoints, setTotalPoints] = useState(0);
  return ( 
    <View style={styles.mainCardContainer}>
        <Text style={styles.monthText}> Diciembre</Text>
        <Text style={styles.totalPointsText}> {totalPoints} pts</Text>
    </View>
  )
}

export default PointsCard;