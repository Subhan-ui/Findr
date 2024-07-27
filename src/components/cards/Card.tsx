import { View, Text, Image,Pressable, } from "react-native"


const Card = ()=>{
    return (
        <View
          style={{
            height: 340,
            width: 213,
            borderRadius: 8,
            marginRight:16,
          }}>
          <View
            style={{
              backgroundColor: '#cc4141',
              height: 44,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderTopEndRadius: 8,
              borderTopLeftRadius: 8,
            }}>
            <Text
              style={{
                color: 'white',
                fontFamily: 'Familjen Grotesk',
                fontSize: 32,
                fontWeight: '400',
              }}>
              Missing
            </Text>
          </View>
          <View>
            <Image
              source={require('../../assets/icons/images/homeSlider.png')}
              style={{width: 212, height: 260, zIndex: 100}}
            />
            <Image
              source={require('../../assets/icons/images/blank.png')}
              style={{
                width: 212,
                height: 260,
                zIndex: 200,
                position: 'absolute',
              }}
            />
            <View
              style={{
                position: 'absolute',
                bottom: 16,
                left: 16,
                zIndex: 1000,
              }}>
              <Text style={{color: 'white'}}>Name: Someone</Text>
              <Text style={{color: 'white'}}>Age: 5 (Female)</Text>
              <Text style={{color: 'white'}}>Last seen: time</Text>
              <Text style={{color: 'white'}}>Last seen location: Location</Text>
              <Pressable
                style={{
                  marginTop: 12,
                  backgroundColor: '#5b59fe',
                  borderRadius: 8,
                  width: 78,
                  height: 24,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text style={{color: 'white', fontSize: 11,}}>View Details</Text>
              </Pressable>
            </View>
          </View>
        </View>
    )
}

export default Card;