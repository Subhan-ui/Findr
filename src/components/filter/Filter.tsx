import { View, Text, ScrollView } from "react-native";

const Filter = ()=>{
    return (
        <><View style={{marginTop: 30, marginHorizontal: 20, display: 'flex', flexDirection: 'row', alignItems: 'center', }}>
        <Text
          style={{
            color: 'black',
            fontFamily: 'Familjen Grotesk',
            fontSize: 14,
            fontWeight: '500',
          }}>
          Filter By:{' '}
        </Text>
        <ScrollView horizontal style={{display:'flex', flexDirection: 'row', }}>
          <View
            style={{
              height: 36,
              width: 57,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              marginLeft: 16
            }}>
            <Text style={{fontWeight: '500', fontSize: 14, color: 'black'}}>
              Male
            </Text>
          </View>
          <View
            style={{
              height: 36,
              width: 57,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              marginLeft: 16
            }}>
            <Text style={{fontWeight: '500', fontSize: 14, color: 'black'}}>
              Female
            </Text>
          </View>
          <View
            style={{
              height: 36,
              width: 57,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              marginLeft: 16
            }}>
            <Text style={{fontWeight: '500', fontSize: 14, color: 'black'}}>
              Trans
            </Text>
          </View>
          <View
            style={{
              height: 36,
              width: 57,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              marginLeft: 16
            }}>
            <Text style={{fontWeight: '500', fontSize: 14, color: 'black'}}>
              Age
            </Text>
          </View>
          <View
            style={{
              height: 36,
              width: 57,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              marginLeft: 16
            }}>
            <Text style={{fontWeight: '500', fontSize: 14, color: 'black'}}>
              Age
            </Text>
          </View>
          <View
            style={{
              height: 36,
              width: 57,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              marginLeft: 16
            }}>
            <Text style={{fontWeight: '500', fontSize: 14, color: 'black'}}>
              Age
            </Text>
          </View>
        </ScrollView>
      </View>
        <View style={{marginTop:20,borderWidth:0.5, borderColor: 'gray', width:'100%', }}/>
      </>
    )
}

export default Filter;