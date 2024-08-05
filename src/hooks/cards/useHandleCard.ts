import {useState} from 'react';

const useHandleCard = (lastSeen: string, photo: string) => {
  const time = new Date(lastSeen).toLocaleString();
  const img = {uri: photo};
  const [modalVisible, setModalVisible] = useState(false);
  const handleModal = () => {
    setModalVisible(prev => !prev);
  };

  return {
    time,
    img,
    modalVisible,
    handleModal,
  };
};

export default useHandleCard;
