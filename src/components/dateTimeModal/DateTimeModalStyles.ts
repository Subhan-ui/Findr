import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors/colors";

const styles = StyleSheet.create({
    wrapperView: {marginTop: 16},
    text: {fontWeight: '500', fontSize: 14, color: 'black'},
    button: {
        borderWidth: 2,
        borderColor: colors.gray,
        height: 44,
        borderRadius: 8,
        display: 'flex',
        justifyContent: 'center',
        paddingLeft: 14,
      },
      black: {color: 'black'}
})

export default styles;