import {View} from 'react-native';

import styles from './NavbarStyles';
import NavButton from '../ui/navButton/NavButton';
import { navItems as items } from '../../constants/contents';

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
