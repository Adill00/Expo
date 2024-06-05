import React from 'react'
import {View,Text} from 'react-native'

const RowText = (props) => {
    const{messageOne,
      messageTwo,
      containerStyles,
      messsageOneStyles,
      messsageTwoStyles} 
    = props 
    return(
        <View style={containerStyles}>
          <Text style={messsageOneStyles}>{messageOne}</Text>
          <Text style={messsageTwoStyles}>{messageTwo}</Text>
        </View>
    )
}



export default RowText