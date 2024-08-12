import {useState} from 'react';

const useHandleProfile = (lastSeen: string, photo: string) => {
  const [modalVisible, setModalVisible] = useState(false);
  const handleModal = () => {
    setModalVisible(prev => !prev);
  };
  const time = new Date(lastSeen).toLocaleString();
  const img = {uri: photo};

  return {
    time,
    img,
    modalVisible,
    handleModal,
  };
};

export default useHandleProfile;
