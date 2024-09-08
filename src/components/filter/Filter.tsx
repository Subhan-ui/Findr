import {View, Text, ScrollView} from 'react-native';

import styles from './FilterStyles';
import {changeFilter} from '../../types/types';
import { items } from '../../constants/contents';

const Filter = ({changeFilter}: changeFilter) => {
  return (
    <>
      <View style={styles.wrapperView}>
        <Text style={styles.filterText}>Filter By:</Text>
        <ScrollView horizontal style={styles.row}>
          {items.map(item => (
            <View style={styles.filterItem}>
              <Text
                onPress={() => changeFilter(item.text)}
                style={styles.filterItemText}>
                {item.child}
              </Text>
            </View>
          ))}
        </ScrollView>
      </View>
      <View style={styles.underline} />
    </>
  );
};

export default Filter;
