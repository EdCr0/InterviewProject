import { StyleSheet } from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from 'react-native-responsive-screen';

export default StyleSheet.create({
    mainCardContainer: {
        flex:1,
        width:'100%',
        backgroundColor: 'purple'
    },
    monthText:{
        color: '#FFF',
    },
    totalPointsText: {
        fontSize: 35,
        alignSelf: 'center',
        color: '#FFF',
    },
    productImage: {
        height: hp('20%'),
        width: wp('80%')
    }
});