import React from 'react';
import { View, Text, FlatList } from 'react-native';
import styles from './MainScreen.style';
import PointsCard from '../PointsCard/PointsCard';
import ProductCard from '../ProductCard/ProductCard';
import { ProductCardInterface } from '../../interfaces/interfaces';

const MainScreen = () => {

    const renderItem = ({ item }: { item: ProductCardInterface }) => (
        <ProductCard
          key={item.id}
          data={item}
        />
    );

    const arraytochange = [
        {
          "createdAt": "2022-12-09T06:34:25.607Z",
          "product": "Handmade Metal Shoes",
          "points": 16434,
          "image": "https://loremflickr.com/640/480/transport",
          "is_redemption": false,
          "id": "1"
        },
        {
          "createdAt": "2022-12-09T17:02:51.904Z",
          "product": "Recycled Plastic Tuna",
          "points": 92984,
          "image": "https://loremflickr.com/640/480/technics",
          "is_redemption": false,
          "id": "2"
        },
        {
          "createdAt": "2022-12-09T10:20:00.909Z",
          "product": "Fantastic Granite Bacon",
          "points": 42416,
          "image": "https://loremflickr.com/640/480/technics",
          "is_redemption": false,
          "id": "3"
        },
        {
          "createdAt": "2022-12-09T00:30:23.966Z",
          "product": "Fantastic Fresh Gloves",
          "points": 23913,
          "image": "https://loremflickr.com/640/480/city",
          "is_redemption": true,
          "id": "4"
        },
        {
          "createdAt": "2022-12-08T18:54:56.243Z",
          "product": "Rustic Rubber Bacon",
          "points": 69814,
          "image": "https://loremflickr.com/640/480/people",
          "is_redemption": true,
          "id": "5"
        },
        {
          "createdAt": "2022-12-09T14:12:11.097Z",
          "product": "Tasty Concrete Cheese",
          "points": 81585,
          "image": "https://loremflickr.com/640/480/business",
          "is_redemption": false,
          "id": "6"
        },
        {
          "createdAt": "2022-12-09T12:50:53.209Z",
          "product": "Oriental Cotton Keyboard",
          "points": 88323,
          "image": "https://loremflickr.com/640/480/nightlife",
          "is_redemption": false,
          "id": "7"
        },
        {
          "createdAt": "2022-12-08T20:32:14.169Z",
          "product": "Oriental Soft Pants",
          "points": 87794,
          "image": "https://loremflickr.com/640/480/animals",
          "is_redemption": true,
          "id": "8"
        },
        {
          "createdAt": "2022-12-09T05:46:47.645Z",
          "product": "Luxurious Rubber Bacon",
          "points": 13063,
          "image": "https://loremflickr.com/640/480/food",
          "is_redemption": true,
          "id": "9"
        },
        {
          "createdAt": "2022-12-09T10:56:34.206Z",
          "product": "Elegant Rubber Fish",
          "points": 91311,
          "image": "https://loremflickr.com/640/480/transport",
          "is_redemption": false,
          "id": "10"
        },
        {
          "createdAt": "2022-12-09T12:36:43.169Z",
          "product": "Recycled Wooden Salad",
          "points": 44871,
          "image": "https://loremflickr.com/640/480/city",
          "is_redemption": false,
          "id": "11"
        }
      ];
      
    return ( 
        <View style={styles.mainContainer}>
            <View style={styles.headerContainer}>
                <Text style={styles.welcomeText}> Bienvenido de vuelta!</Text>
                <Text style={styles.nameText}> Ruben Rodríguez</Text>
                <Text style={styles.yourPointsText}>TUS PUNTOS</Text>
                <PointsCard />
            </View>
            <View style={styles.bodyContainer}>
                <Text style={styles.yourPointsText}>TUS MOVIMIENTOS</Text>
                <FlatList 
                    data={arraytochange}
                    renderItem={renderItem}
                    keyExtractor={
                        (item) => item.id
                    }
                />

            </View>
            <View style={styles.footerContainer}>

            </View>
        </View>
    )
}

export default MainScreen;