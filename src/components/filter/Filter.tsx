import {View, Text, ScrollView} from 'react-native';
import {changeFilter, filterItemType} from '../../types/types';
import styles from './FilterStyles';

const Filter = ({changeFilter}: changeFilter) => {
  const items: filterItemType[] = [
    {id: 1, text: 'all', child: 'All'},
    {id: 2, text: 'male', child: 'Male'},
    {id: 3, text: 'female', child: 'Female'},
    {id: 4, text: 'age', child: 'Age'},
    {id: 5, text: 'age', child: 'Age'},
  ];
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
