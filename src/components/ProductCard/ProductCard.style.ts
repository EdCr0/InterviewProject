import { StyleSheet } from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from 'react-native-responsive-screen';

export default StyleSheet.create({
    mainCardContainer: {
        flex:1,
        width:'100%',
        flexDirection:'row',
        backgroundColor:'#FFF',
        padding:3,
        borderRadius:10
    },
    productImage: {
        height: hp('7%'),
        width: wp('15%'),
        alignSelf:'center',
        borderRadius: 8,
    },
    productNameText:{
        color: '#000',
        fontWeight: "bold",
        paddingTop: 5
    },
    dateText: {
        paddingTop:5,
        color: '#000',
    },
    signPointsText:{
        fontSize: 15,
        fontWeight: "bold",
    },
    pointsText: {
        color: '#000',
        fontWeight: "bold",
    }

});
