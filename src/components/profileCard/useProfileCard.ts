import {useState} from 'react';

const useHandleProfile = (
  lastSeen: string,
  photo: string,
  name: string,
  age: string,
  gender: string,
  location: string,
) => {
  const [modalVisible, setModalVisible] = useState(false);
  const handleModal = () => {
    setModalVisible(prev => !prev);
  };
  const time = new Date(lastSeen).toLocaleString();
  const img = {uri: photo};
  const items = [
    {id: 1, text: `Name: ${name}`},
    {id: 2, text: `Age: ${age} (${gender})`},
    {id: 3, text: `Last Seen: ${time} IST`},
    {id: 4, text: `Last Seen Location: ${location}`},
  ];

  return {
    time,
    items,
    img,
    modalVisible,
    handleModal,
  };
};

export default useHandleProfile;
