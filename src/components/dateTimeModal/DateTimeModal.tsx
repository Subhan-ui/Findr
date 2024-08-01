import {useState} from 'react';
import {Modal, Pressable, Text, View} from 'react-native';
import DatePicker from 'react-native-date-picker';
import Icon from 'react-native-vector-icons/Entypo';
import {useAppDispatch, useAppSelector} from '../../store/hooks';
import {
  selectDate,
  handleChangeDate,
} from '../../store/features/missingReportSlice';
import { colors } from '../../constants/colors';

const DateTimeModal = ({
  modalVisible,
  handleModal,
}: {
  modalVisible: boolean;
  handleModal: () => void;
}) => {
  const dateISO = useAppSelector(selectDate);
  const date = new Date(dateISO);
  const dispatch = useAppDispatch();
  return (
    <>
      <View style={{marginTop: 16}}>
        <Text style={{fontWeight: '500', fontSize: 14, color: '#000000'}}>
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
