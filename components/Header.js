import React from 'react'
import{View, Text, StyleSheet} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

const Header = () => {
return(
<View style={styles.container}>
        <View style={{ flex: 1, justifyContent:'center'}}>
             {/* Left Navigation Header button */}
        </View>
        <View style={{ flex: 2,justifyContent:'center',alignItems:'center' }}>
          <Text>Title</Text>
        </View>
        <View style={{ flex: 1 }}></View>
               {/* Right Navigation Header button */}
      </View>)
}

export default Header

const styles = StyleSheet.create({
    container:{ 
        flexDirection: 'row',
         height: 50, backgroundColor:'#333'
        }
})

