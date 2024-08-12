import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors/colors";

const styles = StyleSheet.create({
    surrounding: {
        width: '100%',
        backgroundColor: colors.lightBlack,
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      },
      wrapperView: {
        width: '80%',
        height: 591,
        backgroundColor: 'white',
        borderRadius: 8,
      },
      crossIcon: {position: 'absolute', right: 10, top: 10},
      center: {display: 'flex', alignItems: 'center'},
      image: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginTop: 24,
        marginBottom: 16,
      },
      text: {
        fontFamily: 'Familjen Grotesk',
        fontWeight: '400',
        fontSize: 14,
        lineHeight: 17,
        color: 'black',
      },
      inputsView: {marginTop: 16},
      inputLocation: {
        marginHorizontal: 16,
        borderWidth: 1,
        borderColor: 'black',
        height: 29,
        fontSize: 11,
        padding: 8,
        borderRadius: 8,
      },
      inputDescription: {
        borderWidth: 1,
        borderColor: 'black',
        marginHorizontal: 16,
        borderRadius: 8,
        marginTop: 16,
        padding: 8,
        height: 100,
        fontSize: 11,
      },
      buttonView: {marginTop: 112, marginHorizontal: 16, display: 'flex'},
      buttonEmail:{
        borderWidth: 1,
        borderColor: colors.blue,
        paddingVertical: 10,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
      },
      textEmail: {
        color: colors.blue,
        fontFamily: 'Montserrat',
        fontWeight: '700',
        fontSize: 11,
      },
      buttonReport: {
        backgroundColor: colors.blue,
        paddingVertical: 10,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 16,
        borderRadius: 8,
      },
      textReport: {
        color: 'white',
        fontFamily: 'Montserrat',
        fontWeight: '700',
        fontSize: 11,
      }
})

export default styles;