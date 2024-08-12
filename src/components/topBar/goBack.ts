import useTypeNavigation from "../../navigation/useTypeNavigation";

const goBackComp = ()=>{
    const navigation = useTypeNavigation();
    const goBack = () => {
      navigation.goBack();
    };
    return {goBack}
}

export default goBackComp;