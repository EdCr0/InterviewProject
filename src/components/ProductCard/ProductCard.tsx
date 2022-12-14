import React, { useState } from 'react';
import { View, Text, Image } from 'react-native';
import styles from '../ProductCard/ProductCard.style';
import { ProductCardInterface } from '../../interfaces/interfaces';

const ProductCard = ({ data }: { data: ProductCardInterface }) => {

    return ( 
        <View style={styles.mainCardContainer}>
            <Image
                // source={require('../../utils/icon_add.png')} 
                source={{uri: data.image}}
                style={styles.productImage}
                resizeMode={'contain'}
            />
            <Text style={styles.monthText}> {data.product} </Text>
            <Text style={styles.totalPointsText}> {data.createdAt}</Text>
            {data.is_redemption ? <Text>"+"</Text> : <Text>"-"</Text>}
            <Text style={styles.totalPointsText}> {data.points}</Text>
        </View>
  )
}

export default ProductCard;