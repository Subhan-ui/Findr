
import {Pressable, Text, View} from 'react-native';
import DatePicker from 'react-native-date-picker';
import {useAppDispatch, useAppSelector} from '../../store/hooks';
import {
  selectDate,
  handleChangeDate,
} from '../../store/features/missingReportSlice';
import { colors } from '../../constants/colors';
import { modalType } from '../../types/modalType';

const DateTimeModal = ({
  modalVisible,
  handleModal,
}: modalType) => {
  const dateISO = useAppSelector(selectDate);
  const date = new Date(dateISO);
  const dispatch = useAppDispatch();
  return (
    <>
      <View style={{marginTop: 16}}>
        <Text style={{fontWeight: '500', fontSize: 14, color: 'black'}}>
          Last Seen
        </Text>
        <Pressable
          onPress={handleModal}
          style={{
            borderWidth: 2,
            borderColor: colors.gray,
            height: 44,
            borderRadius: 8,
            display: 'flex',
            justifyContent: 'center',
            paddingLeft: 14,
          }}>
          <Text style={{color: 'black'}}>{date.toLocaleString()}</Text>
        </Pressable>
      </View>
      <DatePicker
        modal
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
