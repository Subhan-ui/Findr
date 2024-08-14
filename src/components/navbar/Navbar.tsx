import {View} from 'react-native';
import NavButton from '../ui/navButton/NavButton';
import items from './useNavbar';
import styles from './NavbarStyles';

const Navbar = () => (
  <View style={styles.wrapperView}>
    <View style={styles.innerView}>
      {items.map(item => (
        <NavButton key={item.id} text={item.text} navigate={item.navigate}>
          {item.child}
        </NavButton>
      ))}
    </View>
  </View>
);

export default Navbar;
