import {Pressable, Text, View} from 'react-native';
import DatePicker from 'react-native-date-picker';

import styles from './DateTimeModalStyles';
import {useAppDispatch, useAppSelector} from '../../store/hooks';
import {
  selectDate,
  handleChangeDate,
} from '../../store/features/missingReportSlice';
import {modalType} from '../../types/types';

const DateTimeModal = ({modalVisible, handleModal}: modalType) => {
  const dateISO = useAppSelector(selectDate);
  const date = new Date(dateISO);
  const dispatch = useAppDispatch();
  return (
    <>
      <View style={styles.wrapperView}>
        <Text style={styles.text}>Last Seen</Text>
        <Pressable onPress={handleModal} style={styles.button}>
          <Text style={styles.black}>{date.toLocaleString()}</Text>
        </Pressable>
      </View>
      <DatePicker
          
        open={modalVisible}
        date={date}
        onConfirm={(selectedDate: Date) => {
          handleModal();
          dispatch(handleChangeDate(selectedDate.toISOString()));
        }}
        onCancel={handleModal}
        mode="datetime"
      />
    </>
  );
};

export default DateTimeModal;
