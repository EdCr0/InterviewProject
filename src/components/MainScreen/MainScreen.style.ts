import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    mainContainer: {
        flex:1,
        // backgroundColor: 'blue'
    },
    welcomeText: {
        fontSize: 20,
        fontWeight: "bold",
        color: '#000',
        paddingTop: 10,
        paddingLeft: 10,
    },
    nameText:{
        paddingLeft: 10,
        paddingBottom: 10,
    },
    headerContainer :{
        flex:.38,
        backgroundColor:'red',
        // alignItems: 'center',
    },
    bodyContainer: {
        flex: .52,
        backgroundColor:'pink',
    },
    footerContainer: {
        flex: .1,
        backgroundColor:'green',
    },
    yourPointsText: {
        paddingLeft: 10,
        paddingBottom: 10,
    }
});