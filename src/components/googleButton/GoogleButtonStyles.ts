import { StyleSheet } from "react-native";

import { colors } from "../../constants/colors/colors";
import { hp } from "../../constants/contents";

const styles = StyleSheet.create({
    wrapperView: {display: 'flex', alignItems: 'center', marginTop: hp(1)},
    imageView: {
        borderWidth: 1,
        borderColor: colors.darkBlue,
        height: 57,
        width: 60,
        borderRadius: 12,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      },
      image: {height: 34, width: 34}
})

export default styles;