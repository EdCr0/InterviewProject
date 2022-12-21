import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    mainContainer: {
        flex:1,
        backgroundColor: 'rgba(242,242,242,1)'
    },
    welcomeText: {
        fontSize: 20,
        fontWeight: "bold",
        color: '#000',
        paddingTop: 10,
        paddingLeft: 10,
    },
    nameText:{
        paddingLeft: 11,
        paddingBottom: 10,
    },
    headerContainer :{
        flex:.38,
        backgroundColor:'transparent',
    },
    bodyContainer: {
        flex: .52,
        width:'94%',
        alignSelf:'center',
        borderRadius: 25,
        backgroundColor: '#FFF',
    },
    footerContainer: {
        flex: .1,
        backgroundColor:'transparent',
        justifyContent: 'center',
        alignItems:'center'
    },
    yourPointsText: {
        paddingLeft: 15,
        paddingBottom: 10,
    }
});