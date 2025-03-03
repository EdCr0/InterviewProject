import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from '../ProductCard/ProductCard.style';
import { ProductCardInterface } from '../../interfaces/interfaces';
import { getDayMonthForUser} from '../../utils/dateUtils';

const ProductCard = ({ data }: { data: ProductCardInterface }) => {

    const formatDate = (dateToFormat) => {
        const date = new Date(dateToFormat);
        const dayMonth = getDayMonthForUser(date);
        const year = date.getFullYear();
        
        return dayMonth + "," + year;
    };

    return ( 
            <TouchableOpacity
                style={styles.mainCardContainer}
                onPress={()=>{console.log("aa")}}
            >
                <View style={{flex:0.20,justifyContent: 'center', padding:5}}>
                    <Image
                        // source={require('../../utils/icon_add.png')} 
                        source={{uri: data.image}}
                        style={styles.productImage}
                        resizeMode={'contain'}
                    />
                </View>
                <View style={{flex:0.50}}>
                    <Text style={styles.productNameText}> {data.product} </Text>
                    <Text style={styles.dateText}> {formatDate(data.createdAt)}</Text>
                </View>
                <View style={{flex:0.30,justifyContent: 'center'}}>
                    <Text style={[styles.signPointsText, {color: data.is_redemption ? 'red' : 'green'}]}> 
                        {data.is_redemption ? "-" : "+"}
                        <Text style={styles.pointsText}> {data.points} {'  >'}</Text> 
                    </Text>
                </View>
            </TouchableOpacity>
  )
}

export default ProductCard;
